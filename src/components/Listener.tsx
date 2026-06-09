const ForResponse = [
    "Hello",
    "Good morning",
    "Good Night",
];

const Listener = ({response}: {response: string}) => {
    const normalizedResponse = response.trim().toLowerCase();
    const matched = ForResponse.find(
        item => item.trim().toLowerCase() === normalizedResponse
    );

    return <>
        
        <p className='message'>
            Hey I recognized that you typed "{response}". My response to that is: <br></br>
            {matched == 'Hello' ? 'Hello there!' : matched == 'Good morning' ? 'Good morning to you too!' : matched == 'Good Night' ? 'Sleep well!' : 'I have no response to that.'}
        </p>
    </>;
};

export default Listener;
