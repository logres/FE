import axios from "axios";

export const get_nonce = async (address) => {
    const res = await axios.get(`http://127.0.0.1:9090/api/nonce/${address}`);
    return res.data;
}

export const log_in = async (address, pk, signature) => {
    const res = await axios.post(`http://127.0.0.1:9090/api/login`, 
        {
            address: address,
            pk: pk,
            signature: signature
        });
    return res.data;
}

export const register = async (username, address) => {
    const res = await axios.post(`http://127.0.0.1:9090/api/register`,
    {
        username: username,
        address: address
    });
    return res.data;
}