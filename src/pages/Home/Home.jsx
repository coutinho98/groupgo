import Layout from "../../components/LoginPage/Layout";
import Sidebar from "../../components/Siderbar";
import Card from "../../components/LoginPage/Card"
import Input from "../../components/Input"
import Button from "../../components/Button"

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Layout>
          <Card>
            <h1 className="text-4xl mb-8">Create Event</h1>
            <p className="text-sm">Event name</p>
            <Input
              className="flex-1"
              id="email"
              type="email"
              name="email"
              placeholder="Enter Event Name"
              required
            >
            </Input>
          </Card>
        </Layout>
      </div>
    </div>
  );
}

export default Home;