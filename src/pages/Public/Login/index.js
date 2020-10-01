import React from 'react'
import { Card } from 'react-bootstrap'
import { FaHome } from "react-icons/fa"
import { PrimaryButton } from '../../../components/UI/Button'

const Login = () => {
    return (
        <Card style={{ width: '18rem' }} className="mt-6">
            <PrimaryButton leftIcon={<FaHome />} rightIcon={<FaHome />} />
        </Card>
    )
}

export default Login
