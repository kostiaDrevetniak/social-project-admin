import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { editCategory, getCategory } from './helper/RequestHelper';
import ApplicationHeader from '../components/menu/ApplicationHeader';
import CategoryForm from '../components/form/CategoryForm';

const UpdateCategory = () => {
    const pathParam = useParams();
    const navigate = useNavigate();
    const basePage = "/categories";
  
    const [company, setCompany] = useState(null);
  
    useEffect(() => {
      getCategory(pathParam.id).then((data) => {
        setCompany(data);
      });
    }, [pathParam.id]);
  
    function onSubmit(data) {
      data.id = "";
      editCategory(data, pathParam.id).then(() => navigate(basePage));
    }
  
    return (
      company && (
        <>
          <ApplicationHeader />
          <CategoryForm data={company} onSubmit={onSubmit} basePage={basePage} />
        </>
      )
    );
}

export default UpdateCategory