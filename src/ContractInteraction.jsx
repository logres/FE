import { a as _abi } from './abi.js';
import React, { useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

function ContractInteraction() {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [param1, setParam1] = useState('');
    const [param2, setParam2] = useState('');

    // 初始化 Web3.js，使用 Metamask 提供的 Web3Provider
    const initWeb3 = async () => {
        if (window.ethereum) {
            try {
                // 请求用户授权
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = await detectEthereumProvider();
                const web3 = new Web3(provider);
                setWeb3(web3);

                // 获取 Metamask 中选中的账户
                const accounts = await provider.request({ method: 'eth_accounts' });
                setAccount(accounts[0]);

                // 定义合约 ABI 和地址
                const contractAbi = _abi;
                const contractAddress = '0x5e906da9f83e81ff2342a8f5cabe5c9245f76bf1';

                // 创建合约实例
                const contract = new web3.eth.Contract(contractAbi, contractAddress);
                setContract(contract);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error('请先安装 Metamask');
        }
    };

    // 处理参数1输入框变化
    const handleParam1Change = (event) => {
        setParam1(event.target.value);
    };

    // 处理参数2输入框变化
    const handleParam2Change = (event) => {
        setParam2(event.target.value);
    };

    // 处理发起交易按钮点击事件
    const handleSendTransaction = async () => {
        if (!web3 || !account || !contract) {
            console.error('请先连接 Metamask');
            return;
        }

        // 构造交易对象
        const txObject = {
            from: account,
            to: contract.options.address,
            gas: '100000',
            data: contract.methods.store(param1).encodeABI()
        };

        // 使用 Metamask 签名并发送交易
        try {
            const result = await window.ethereum.request({ method: 'eth_sendTransaction', params: [txObject] });
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={initWeb3}>连接 Metamask</button>
            {web3 && (
                <>
                    <p>当前账户：{account}</p>
                    <input type="text" value={param1} onChange={handleParam1Change} />
                    <input type="text" value={param2} onChange={handleParam2Change} />
                    <button onClick={handleSendTransaction}>发起交易</button>
                </>
            )}
        </div>
    );
}

export default ContractInteraction;

