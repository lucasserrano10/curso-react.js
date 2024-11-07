const UserDetails = ({id, name, job, age}) => {
    return (
    <div>
        <ul>
            <h3>NOME : {name}</h3>
            <p>PROFISSÃO : {job}</p>
            <p>IDADE : {age}</p>
            {age >= 18 ? (<p>PODE TER HABILITAÇÃO</p>) : (<p> NÃO PODE TER HABILITAÇÃO</p>)}
        </ul>
    </div>
)
}

export default UserDetails
