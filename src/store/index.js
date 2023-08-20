import { createStore } from "vuex";
export default createStore({
    state(){
        return{
            //endpoint
            endpointURL:'https://ashypls.com/eventsbooking/data/',

            //UX
            appLoaded:false,
            calendarLoaded:false,
            viewMode:'list',

            //UX--searching
            searchTerm:null,

            //UX--paging
            pagingPageSize:5,
            pagingCurrentPage:1,
            pagingTotalPages:1,

            //FILTER
            checkFilter:false,
            selectedMonthName:null,
            selectedMonthNumber:0,
            categoriesModel:null,
            facilitatorsModel:null,
            VenuesModel:null,

            //DATA
            curUser:[],
            curEvents:[],
            eventView:[],
            pagedView:[],
            facilitatorList:[],
            venueList:[],
            categoryList:[],
            nextMonths:[],
            calenderView:[],
            userSignups:[],
            userSettings:[],
        }
    }
})