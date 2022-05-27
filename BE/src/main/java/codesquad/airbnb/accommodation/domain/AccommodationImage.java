package codesquad.airbnb.accommodation.domain;

import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
public class AccommodationImage {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accommodation_image_id")
    private Long id;

    private String url;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "accommodation_id")
    private Accommodation accommodation;

    AccommodationImage(String url, Accommodation accommodation) {
        this.url = url;
        this.accommodation = accommodation;
    }

}
