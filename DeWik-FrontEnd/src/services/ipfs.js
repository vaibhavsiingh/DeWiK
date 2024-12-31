import pinataSDK from '@pinata/sdk';

const pinataJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwZjk5MzE5NC1jMTY5LTQ3ZWUtYTE4Ny0wYjY0MTI5Njg2MmEiLCJlbWFpbCI6InNjaWVuY2VidXp6d2l0aGRldmFuc2hAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA0NjliYTg5NTgyOTAzM2I0NDVjIiwic2NvcGVkS2V5U2VjcmV0IjoiMGY4MzUwMWIwNDliMGU0ZjAyNWY3NDQxMmQ4ZjgxZWEwOWQ0ZmYyZmIwZTQxODE2NWM3OTMzNmM3ZTNlYzUxYyIsImV4cCI6MTc1OTYwOTUxNH0.veQFxx61xLXwJDsnmfqhxXfF-3Z479hIiIbKtediSv8";

console.log("pinatajwt", pinataJwt);
const pinata = pinataSDK({
    pinataJwt: pinataJwt
});

// Example function to pin a file
const pinFileToIPFS = async (file) => {
    try {
        const result = await pinata.pinFileToIPFS(file);
        console.log('File pinned successfully:', result);
        return result;
    } catch (error) {
        console.error('Error pinning file:', error);
        throw error;
    }
};

// Example function to pin JSON
const pinJSONToIPFS = async (json) => {
    try {
        const result = await pinata.pinJSONToIPFS(json);
        console.log('JSON pinned successfully:', result);
        return result;
    } catch (error) {
        console.error('Error pinning JSON:', error);
        throw error;
    }
};

export default { pinFileToIPFS, pinJSONToIPFS };
