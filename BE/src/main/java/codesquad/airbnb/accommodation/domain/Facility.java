package codesquad.airbnb.accommodation.domain;

import lombok.*;

import javax.persistence.Embeddable;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
public class Facility {

    private Integer roomCount;
    private Integer bedCount;
    private Integer bathRoomCount;
    private Boolean hasKitchen;
    private Boolean hasWifi;
    private Boolean hasAirConditioner;
    private Boolean hasHairDrier;

    @Builder
    public Facility(Integer roomCount, Integer bedCount, Integer bathRoomCount,
                    Boolean hasKitchen, Boolean hasWifi, Boolean hasAirConditioner,
                    Boolean hasHairDrier) {
        this.roomCount = roomCount;
        this.bedCount = bedCount;
        this.bathRoomCount = bathRoomCount;
        this.hasKitchen = hasKitchen;
        this.hasWifi = hasWifi;
        this.hasAirConditioner = hasAirConditioner;
        this.hasHairDrier = hasHairDrier;
    }

    public Integer getRoomCount() {
        return roomCount;
    }

    public Integer getBedCount() {
        return bedCount;
    }

    public Integer getBathRoomCount() {
        return bathRoomCount;
    }

    public Boolean hasKitchen() {
        return hasKitchen;
    }

    public Boolean hasWifi() {
        return hasWifi;
    }

    public Boolean hasAirConditioner() {
        return hasAirConditioner;
    }

    public Boolean hasHairDrier() {
        return hasHairDrier;
    }

}
