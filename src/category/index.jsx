import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { deleteCategory, getCategories } from './helper/RequestHelper';
import ApplicationHeader from '../components/menu/ApplicationHeader';
import Category from '../components/table/Category';

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
  
    useEffect(() => {
      getCategories().then((data) => setCategories(data));
    }, []);
  
    const callDelete = (id) => {
      deleteCategory(id).then(() => navigate(0));
    }
  
    return (
      <>
        <ApplicationHeader />
        <div className="container w-75">
          <h3 className="py-3">Список усіх категорій</h3>
          <button onClick={() => navigate("create")} className="btn btn-info">
            Створити
          </button>
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Id</th>
                <th>Назва</th>
                <th>Операції</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <Category category={category}>
                  <>
                    <Link to={"" + category.id}>
                      <button className="btn btn-info me-2">Переглянути</button>
                    </Link>
                    <input
                      type="button"
                      value="Видалити"
                      className="btn btn-danger"
                      onClick={() => callDelete(category.id)}
                    />
                  </>
                </Category>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default CategoryList