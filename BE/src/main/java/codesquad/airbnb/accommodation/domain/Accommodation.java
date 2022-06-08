package codesquad.airbnb.accommodation.domain;

import codesquad.airbnb.booking.domain.Booking;
import codesquad.airbnb.exception.TooManyImageException;
import codesquad.airbnb.review.domain.Review;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "name", "description", "limitGuestCount", "pricePerDate", "location", "facility"})
@Table(name = "accommodation")
public class Accommodation {

    public static final int IMAGE_COUNT_LIMIT = 5;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accommodation_id")
    private Long id;

    @Column(name = "name")
    private String name;

    private String description;

    private Integer limitGuestCount;
    private Integer pricePerDate;

    @Embedded
    private Location location;

    @Embedded
    private Facility facility;

    @OneToMany(mappedBy = "accommodation", fetch = LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<AccommodationImage> images =  new ArrayList<>();

    @OneToMany(mappedBy = "accommodation")
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "accommodation")
    private List<Review> reviews = new ArrayList<>();

    @Builder(access = AccessLevel.PUBLIC)
    private Accommodation(String name, String description, Integer limitGuestCount, Integer pricePerDate, Location location, Facility facility) {
        this.name = name;
        this.description = description;
        this.limitGuestCount = limitGuestCount;
        this.pricePerDate = pricePerDate;
        this.location = location;
        this.facility = facility;
    }

    public void addImage(String imageUrl) {
        validateImageCountLimit();
        AccommodationImage accommodationImage = new AccommodationImage(imageUrl, this);
        images.add(accommodationImage);
    }

    private void validateImageCountLimit() {
        if (images.size() > IMAGE_COUNT_LIMIT) {
            throw new TooManyImageException(
                    String.format("이미지는 최대 %d 개까지만 추가 가능합니다.", IMAGE_COUNT_LIMIT));
        }
    }

}
