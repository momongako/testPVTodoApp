import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TableList = () => {

    const [datas, setData] = useState([]);

    //Content
    useEffect(() => {
        console.log('app useeffect!!');
        let url = 'https://62e7ba7b93938a545bd7d018.mockapi.io/testTodoApp';
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data); //setStudents(data)
                console.log('>>> check Data : ', data);
            });


    }, []);
    //Delete
    const deleteUser = (id) => {
        console.log('>>> Check Id : ', id);
        fetch('https://62e7ba7b93938a545bd7d018.mockapi.io/testTodoApp/' + id, {
            method: 'DELETE',
        }).then(() => {

            const result = datas.filter((item) => {
                return item.id !== id;
            });
            setData(result);
        });
    };

    console.log("data", datas);
    return (
        <div className='container-fluid'>
            <br />
            <h1>TodoApp Table</h1>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {datas && datas.length > 0 ?
                        datas.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.FirstName}</td>
                                    <td>{item.LastName}</td>
                                    <td>{item.Email}</td>
                                    <td><Link to={'edit/' + item.id}><i className="bi bi-pen text-success"></i></Link></td>
                                    <td><i className="bi bi-trash3 text-danger " onClick={() => deleteUser(item.id)} ></i></td>
                                </tr>
                            )
                        })
                        : "loading...."
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TableList;