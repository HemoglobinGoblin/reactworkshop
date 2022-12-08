import { COMMENTS } from '../../app/shared/COMMENTS'; 

export const selectCommetnsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId))
};