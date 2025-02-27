import Layout from "../../components/LoginPage/Layout"
import Card from '../../components/LoginPage/Card'
import Header from '../../components/LoginPage/Header'
import Input from '../../components/Input'
import Button from "../../components/Button"


const ForgotPassword = () => {
    return (
        <Layout>
            <Card>
                <Header
                    title="Forgot Password?"
                    subtitle="enter the email or @username to change your password"
                />
                <Input
                    label="email, @username"
                    id="text"
                    type="text"
                    name="text"
                    /*  value={recovery}
                     onChange={handleChange} */
                    placeholder='email or @username'
                    required
                ></Input>

                <Button type="submit">Next</Button>
            </Card>
        </Layout>
    )
}

export default ForgotPassword