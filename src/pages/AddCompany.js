import { React, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Form, Row, Col, FormG, Label, Input, } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// @mui
import { Grid, Button, Container, Stack, Typography, FormGroup } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

export const AddCompany = () => {
    const SORT_OPTIONS = [
        { value: 'latest', label: 'Latest' },
        { value: 'popular', label: 'Popular' },
        { value: 'oldest', label: 'Oldest' },
    ];
    const [formData, setFormData] = useState({
        comp_name: '',
        province: '',
        city: '',
        address: '',
        logo: '',
        webUrl: '',
        ceo_name: '',
        ceo_mob: '',
        ceo_email: '',
        poc_name: '',
        poc_mob: '',
        poc_desig: '',
        daily_avg: '',
        dailymax_amount: '',
        max_amount: '',
        selectedPaymentMethods: "",
        ipAddress: '',
        userName: '',
        password: ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const handleSubmit3 = async (e) => {
        e.preventDefault();
      
    
        try {
          const response = await fetch('http://payment.hashirtechnologies.com/api/regForm', {
            method: 'POST',
            body: formData,
          });

          console.log("data has been added")
          toast.success('Form submitted successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        } catch (error) {
            toast.error('Error submitting form!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
      };
    const handleSubmit2 = async (e) => {
        console.log("HANDLIED SUBMIT")
        e.preventDefault();

        const formData2 = {
            comp_name: 'hlc',
            province: 'sindh',
            city: 'karacho',
            address: 'Anayat Street',
            webUrl: 'www.hlc.com',
            logoUrl: null,
            ceo_name: 'Ali hamza',
            ceo_mob: '023930304',
            ceo_email: 'newkamil@email.com',
            poc_name: 'Mehbub',
            poc_mob: '03154858963',
            poc_desig: 'Developer',
            daily_avg: '45',
            dailymax_amount: '45',
            max_amount: '45',
            selectedPaymentMethods: "jazzcash",
            ipAddress: '2.3.08',
            userName: 'clodius',
            password: '5'
        };
        try {
            const response = await fetch('http://localhost:8080/registerform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData2),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            toast.success('Form submitted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log('Data sent successfully!');
        } catch (error) {
            toast.error('Error submitting form!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error('Error sending data:', error);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        // Check file type
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file.');
            return;
        }

        // Check file size (example: max size of 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size exceeds 5MB limit.');
            return;
        }

        setFormData({
            ...formData,
            logo: file,
        });
    };
    const validate = () => {
        const newErrors = {};

        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company Name is required';
        }
        return newErrors;
    };

    return (
        <>
            <Helmet>
                <title> Dashboard: Add Company | Hashir Technlologies</title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Add Company
                    </Typography>
                    <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                        New
                    </Button>
                </Stack>
                <Container>
                    <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">

                        <Form>
                            <Typography variant="h4" gutterBottom>
                                Company Details
                            </Typography>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail
                                        ">
                                            Company Name
                                        </Label>
                                        <Input
                                            id="compname"
                                            name="comp_name"
                                            placeholder="with a placeholder"
                                            type="email"
                                            value={formData.comp_name}
                                            onChange={handleInputChange}
                                        
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Province
                                        </Label>
                                        <Input
                                            id="province"
                                            name="province"
                                            placeholder="password placeholder"
                                            type="text"
                                            value={formData.province}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            City
                                        </Label>
                                        <Input
                                            id="cityname"
                                            name="city"
                                            placeholder="with a placeholder"
                                            type="text"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Address
                                        </Label>
                                        <Input
                                            id="addressname"
                                            name="address"
                                            placeholder="password placeholder"
                                            type="text"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Logo
                                        </Label>
                                        <Input
                                            id="logourl"
                                            name="logo"
                                            placeholder="with a placeholder"
                                            type="file"
                                            value={formData.logo}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Web Url
                                        </Label>
                                        <Input
                                            id="weburl"
                                            name="webUrl"
                                            placeholder="password placeholder"
                                            type="text"
                                            value={formData.webUrl}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Typography variant="h4" gutterBottom>
                                Individuals Details
                            </Typography>
                            <Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            CEO Name
                                        </Label>
                                        <Input
                                            id="ceo_name"
                                            name="ceo_name"
                                            placeholder="with a placeholder"
                                            type="text"
                                            value={formData.ceo_name}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            CEO Email
                                        </Label>
                                        <Input
                                            id="ceo_email"
                                            name="ceo_email"
                                            placeholder="password placeholder"
                                            type="email"
                                            value={formData.ceo_email}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            CEO Mobile
                                        </Label>
                                        <Input
                                            id="ceomob"
                                            name="ceo_mob"
                                            placeholder="with a placeholder"
                                            type="email"
                                            value={formData.ceo_mob}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Poc name
                                        </Label>
                                        <Input
                                            id="pocname"
                                            name="poc_name"
                                            placeholder="password placeholder"
                                            type="text"
                                            value={formData.poc_name}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row><Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Poc Designation
                                        </Label>
                                        <Input
                                            id="pocdesig"
                                            name="poc_desig"
                                            placeholder="with a placeholder"
                                            type="text"
                                            value={formData.poc_desig}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Typography variant="h4" gutterBottom>
                                    Transaction Details
                                </Typography>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Daily Average
                                        </Label>
                                        <Input
                                            id="dailyavg"
                                            name="daily_avg"
                                            placeholder="password placeholder"
                                            type="number"
                                            value={formData.daily_avg}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            MAX Amount
                                        </Label>
                                        <Input
                                            id="max"
                                            name="max_amount"
                                            placeholder="with a placeholder"
                                            type="email"
                                            value={formData.max_amount}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Daily Max Amount
                                        </Label>
                                        <Input
                                            id="dailymax"
                                            name="dailymax_amount"
                                            placeholder="password placeholder"
                                            type="password"
                                            value={formData.dailymax_amount}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row><Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="payment">
                                            Selected Payment Methods
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="selectedPaymentMethods"
                                            placeholder="with a placeholder"
                                            type="email"
                                            value={formData.selectedPaymentMethods}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Typography variant="h4" gutterBottom>
                                    Credentials
                                </Typography>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            IP address
                                        </Label>
                                        <Input
                                            id="ipaddress"
                                            name="ipAddress"
                                            placeholder="password placeholder"
                                            type="text"
                                            value={formData.ipAddress}
                                            onChange={handleInputChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="exampleAddress">
                                    User Name
                                </Label>
                                <Input
                                    id="username"
                                    name="userName"
                                    placeholder="EmailAddress"
                                    value={formData.userName}
                                            onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress2">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="address"
                                    placeholder="password"
                                    type='password'
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <br /><br />
                            <Button onClick={handleSubmit3} variant="contained">
                                Register Now
                            </Button>
                        </Form>
                    </Stack>
                </Container>
                <ToastContainer />
            </Container>
        </>
    )
}
