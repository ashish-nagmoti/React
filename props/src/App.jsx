import Student from './Student.jsx'
function App(){
    return(
        <>
            <Student name="John" age={30}/>
            <Student name="Jane" age={25} isStudent={true}/>
            <Student />
        </>
    );
}
export default App;