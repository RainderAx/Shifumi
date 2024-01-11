// Remove the import statement for React since it is not being used

const handleRedirect = () => {
    window.location.href = 'https://www.karminecorp.fr/shop';
};

const TestPage = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <button onClick={handleRedirect}>Go to Website</button>
        </div>
    );
};

export default TestPage;