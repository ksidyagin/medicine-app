import { City } from "./city.model";
import { Country } from "./country.model";
import { District } from "./district.model";
import { Region } from "./region.model";
import { StreetType } from "./street.type.model";

export interface Placement {
    id?: number;
    country?: Country;
    city?: City;
    index?: number;
    region?: Region;
    district?: District;
    street?: string;
    street_type?: StreetType;
    home?: string;
    room?: string;
    coordinate_latitude?: number;
    coordinate_longitude?: number;
}

export interface PlacementDTO {
    id?: number;
    country_id?: number;
    city_id?: number;
    index?: number;
    region_id?: number;
    district_id?: number;
    street?: string;
    street_type_id?: number;
    home?: string;
    room?: string;
    coordinate_latitude?: number;
    coordinate_longitude?: number;
}