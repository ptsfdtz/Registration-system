import React, { useState } from 'react';
import InputComponent from './component/InputComponent';
import SubmitComponent from './component/SubmitComponent';
import SelectComponent from './component/SelectComponent';

const genderOptions = ["男","女"]
const collegeOptions = ["计算机与科学学院","电气工程与控制学院","食品科学与工程学院","机械与动力工程学院","柔性电子科学学院"]
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '', //选择男女
    college: '', //选择学院
    studentId: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };


  function validateName(value){
    if (value.length===0)return{valid:true,message:"请输入你的姓名"};
    else if(value.length<2)return {valid:false,message:"请输入正确的姓名"};
    else return {valid:true};
  }
  function validateAge(value){
    if (value < 1)return{valid:false,message:"请输入正确的年龄"};
    else return {valid:true}
  }
  function validateId(value){
    if (value.length!==12)return{valid:false,message:"请输入正确的学号"};
    else return {valid:true}
  }
  function validateNumber(value){
    if (value.length!==11)return{valid:false,message:"请输入正确的电话号码"};
    else return {valid:true}
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputComponent label="姓名"type="text" name="name" value={formData.name} onChange={handleChange} validator={validateName}/>
        <InputComponent label="年龄"type="number" name="age" value={formData.age} onChange={handleChange} validator={validateAge}/>
        <SelectComponent label="性别"options={genderOptions}/>
        <SelectComponent label="学院"options={collegeOptions}/>
        <InputComponent label="学号"type="text" name="studentId" value={formData.studentId} onChange={handleChange} validator={validateId}/>
        <InputComponent label="电话号码"type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} validator={validateNumber}/>
        <InputComponent label="电子邮箱"type="email" name="email" value={formData.email} onChange={handleChange}/>   
        <SubmitComponent onSubmit={SubmitComponent} />
      </form>
    </div>
  );
};

export default RegistrationForm;
