import React from 'react'
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

    const handleSubmit2 = async (e) => {
        console.log("HANDLIED SUBMIT")
        e.preventDefault();

        const formData = {
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
                body: JSON.stringify(formData),
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/registerform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selectedIds,
                    formData
                }),
            });
            console.log("hello", response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Data sent successfully!');
        } catch (error) {
            console.error('Error sending data:', error);
        }
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
                                            id="exampleEmail"
                                            placeholder='Company Name'
                                            name='companyName'
                                            value={formData.comp_name}
                                            onChange={handleChange}
                                            type='text'
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Province
                                        </Label>
                                        <Input
                                            id="Provice"
                                            placeholder='Company Name'
                                            name='companyName'
                                            value={formData.province}
                                            onChange={handleChange}
                                            type='text'
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
                                            type='text'
                                            placeholder='City Name'
                                            name='city'
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Address
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="password placeholder"
                                            type="password"
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
                                            type='file'
                                            className='form-control input-rounded'
                                            placeholder='Upload Logo'
                                            name='logo'
                                            value={formData.logo}
                                            onChange={handleFileChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Web Url
                                        </Label>
                                        <Input
                                            type='text'
                                            className='form-control input-default '
                                            placeholder='Web URL'
                                            name='webUrl'
                                            value={formData.webUrl}
                                            onChange={handleChange}
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
                                            type='text'
                                            className='form-control input-default '
                                            placeholder='CEO NAME'
                                            name='ceoName'
                                            value={formData.ceo_name}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            CEO Email
                                        </Label>
                                        <Input
                                            type='text'
                                            className='form-control input-default '
                                            placeholder='CEO EMAIL'
                                            name='ceoEmail'
                                            value={formData.ceo_email}
                                            onChange={handleChange}
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
                                            type='number'
                                            className='form-control input-default '
                                            placeholder='ceo_number'
                                            name='ceoNum'
                                            value={formData.ceo_mob}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Poc name
                                        </Label>
                                        <Input
                                            type='text'
                                            className='form-control input-default '
                                            placeholder='POC Name'
                                            name='pocName'
                                            value={formData.poc_name}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Poc Number
                                        </Label>
                                        <Input
                                            type='text'
                                            className='form-control input-default '
                                            placeholder='POC Number'
                                            name='pocNum'
                                            value={formData.pocNum}
                                            onChange={handleChange}
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
                                            type='text'
                                            className='form-control input-default '
                                            placeholder='POC Designation'
                                            name='poc_desig'
                                            value={formData.poc_desig}
                                            onChange={handleChange}
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
                                            type='Number'
                                            className='form-control input-default '
                                            placeholder='Daily Trasaction Average'
                                            name='dailyAvg'
                                            value={formData.dailyAvg}
                                            onChange={handleChange}
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
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="with a placeholder"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Daily Max Amount
                                        </Label>
                                        <Input
                                            type='Number'
                                            className='form-control input-default '
                                            placeholder='Max Trasaction Daily'
                                            name='maxAmount'
                                            value={formData.maxAmount}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Daily Max Amount
                                        </Label>
                                        <Input
                                            type='Number'
                                            className='form-control input-default '
                                            placeholder='Max One Product Daily'
                                            name='maxProduct'
                                            value={formData.maxProduct}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row><Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                        <FormControlLabel required control={<Checkbox />} label="Required" />
                                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
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
                                            type='text'
                                            className='form-control input-default '
                                            placeholder='IP-Address'
                                            name='ipServer'
                                            value={formData.ipServer}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="exampleAddress">
                                    User Name
                                </Label>
                                <Input
                                    type='text'
                                    className='form-control input-default '
                                    placeholder='Username'
                                    name='userName'
                                    value={formData.userName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress2">
                                    Password
                                </Label>
                                <Input
                                    type='password'
                                    className='form-control input-default '
                                    placeholder='Password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <br /><br />
                            <Button onClick={handleSubmit2} variant="contained">
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
