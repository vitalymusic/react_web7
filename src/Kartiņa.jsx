

function Kartiņa({attēls,nosaukums,teksts}) {
    return (
        <div className="card" style={{width:"18rem",marginTop:"3rem"}}>
            <img src={attēls} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nosaukums}</h5>
                <p className="card-text">{teksts}</p>
                <a href="#" className="btn btn-primary">Skatīt vairāk</a>
            </div>
        </div>
    )

}

export default Kartiņa
