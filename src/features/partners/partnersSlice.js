import { PARTNERS } from '../../app/shared/PARTNERS';

export const SelectAllPartners = () => {
    return PARTNERS;
};

export const selectFeaturedPartners = () => {
    return PARTNERS.find((partner) => partner.featured);
}