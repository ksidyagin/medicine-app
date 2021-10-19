export interface Placement {
    id?: number;
    district_id?: number;
    region_id?: number;
    country_id?: number;
    city_id?: number;
    street?: string;
    street_type_id?: number;
    index?: number;
    room?: string;
    home?: string;
    coordinate_latitude?: number;
    coordinate_longitude?: number;
    active_sign?: boolean;
}
