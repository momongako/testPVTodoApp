import { useState } from 'react';
import { useEffect } from 'react';


const TableList = () => {

    const [datas, setData] = useState([]);


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
    console.log("data", datas);
    return (
        <div>
            <br />
            <h1>TodoApp Table</h1>
            <br />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
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