import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
// import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../Promotions/promotionsSlice';
import { selectFeaturedPartners } from '../partners/partnersSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';

const DisplayList = () => {
    const items = useSelector((state) => [selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartners(state)]);

    return (
        <Row>
            {items.map((item, idx) => {
                return(
                    item && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                    )
                )
            })}
        </Row>
    )
}

export default DisplayList;