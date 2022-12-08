import { Container } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";
import SubHeader from '../components/SubHeader';

const CampsitesDeirectoryPage = () => {
    return (
      <Container>
        <SubHeader current='Directory' />
        <CampsitesList />
      </Container>
    );
};

export default CampsitesDeirectoryPage;