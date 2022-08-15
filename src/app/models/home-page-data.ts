export interface homePage {
    slider_images: string[];
    overview: string;
    notice: string;
    latest_news: {
        academics: {
            img: string;
            details: string;
        },
        athletics: {
            img: string;
            details: string;
        },
        campus_life: {
            img: string;
            details: string;
        }
    };
    events: [];
    featured_gallery: [];
}

