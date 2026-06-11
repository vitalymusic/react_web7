import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Container, Spinner } from "react-bootstrap"

function Lietotāju_saraksts() {
    // Stavokļi
    const [usersList, setUsersList] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        // Fetch vaicājums
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsersList(data.users))
            .then(setLoading(false))

    }, [])
    return (
        < >
            <h1>Lietotāju saraksts</h1>
            {loading == true ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Container>
                    <table className="table table-bordered">
                        <tbody>
                            {usersList.map((user, i) => (
                                
                                    <tr key={i}>
                                        <td >{user.firstName}</td>
                                        <td >{user.lastName}</td>
                                        <td >{user.age}</td>
                                        <td >{user.email}</td>
                                        <td >{user.phone}</td>
                                        <td >
                                            <Link to={`/user/${user.id}`} className="btn btn-outline-primary">Rediģēt</Link>
                                        </td>
                                    </tr>

                                
                            ))}
                        </tbody>
                    </table>
                </Container>
            )}

        </>);
}

export default Lietotāju_saraksts;