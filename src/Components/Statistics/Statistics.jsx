import JobCategoryList from "../JobCategoryList/JobCategoryList";
import Banner from "../Banner/Banner";
import FeaturedJobjs from "../FeaturedJobjs/FeaturedJobjs";

const Statistics = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobjs></FeaturedJobjs>
        </div>
    );
};

export default Statistics;