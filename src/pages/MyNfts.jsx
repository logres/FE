import React, { useEffect, useState } from 'react';
import { Card, Button, Spin, message } from 'antd';
import Web3 from 'web3';
import { abi as CONTRACT_ABI } from '../web3/abi';
import { address as contractAddress } from '../web3/address';

const MyNfts = ({ isLoggedIn, address }) => {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadNfts = async () => {
            if (!isLoggedIn || address.length < 20) {
                return;
            }
            setLoading(true);
            try {
                // Create Web3 instance
                const web3 = new Web3('https://goerli.infura.io/v3/77c852bb054848c0be854977327b026d');

                // Create contract instance
                const contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);

                // Get the number of tokens owned by the user
                const tokenCount = await contract.methods.owner2TokenCount(address).call();

                // Get metadata for each token
                const nfts = [];
                for (let i = 0; i < tokenCount; i++) {
                    const tokenId = await contract.methods.owner2TokenIds(address, i).call();
                    const _nft = await contract.methods.tokenId2NFT(tokenId).call();
                    nfts.push({ id: tokenId, _nft });
                }

                setNfts(nfts);
            } catch (error) {
                message.error('Failed to load NFTs');
            } finally {
                setLoading(false);
            }
        };

        loadNfts();
    }, [address, isLoggedIn]);

    const handleBurn = async (tokenId) => {
        setLoading(true);
        try {
            const web3 = new Web3('https://goerli.infura.io/v3/77c852bb054848c0be854977327b026d');
            const contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
            await contract.methods.burn(tokenId).send({ from: address });
            message.success('NFT burned successfully');
            setNfts(nfts.filter((nft) => nft.id !== tokenId));
        } catch (error) {
            message.error('Failed to burn NFT');
        } finally {
            setLoading(false);
        }
    };

    const handleSell = (tokenId) => {
        message.success(`Sell NFT ${tokenId}`);
    };

    return (
        <div>
            <h2>My NFTs</h2>
            {loading ? (
                <Spin size="large" />
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {nfts.map((nft) => (
                        <Card key={nft.id} style={{ width: 300, margin: '10px' }}>
                            <img src={nft._nft.image} alt={nft._nft.name} style={{ width: '100%' }} />
                            <h3>{nft._nft.name}</h3>
                            <p>Owned by: {nft._nft.owner}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button onClick={() => handleBurn(nft.id)}>Burn</Button>
                                <Button onClick={() => handleSell(nft.id)}>Sell</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
                    }

export default MyNfts;
