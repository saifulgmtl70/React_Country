
const Country = ({country}) => {
    const{name, flags} = country;
    return (
        <div style={{border:"2px solid tomato", color:"black", padding:"20px", borderRadius:"6px", margin:"10px"}}>
            <div style={{textAlign:"center"}}>
                <h3>Name: {name?.common} </h3>
                <img src={flags.png} alt="" style={{width:"300px", height:"150px"}}/>
            </div>
        </div>
    );
};

export default Country;