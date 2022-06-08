package codesquad.airbnb.review.domain;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.member.domain.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "title", "content", "grade", "createdDate"})
public class Review {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "accommodation_id")
    private Accommodation accommodation;

    private String title;

    private String content;

    private Integer grade;

    private LocalDate createdDate;

    private Review(Member member, String title, String content, int grade) {
        this.member = member;
        this.title = title;
        this.content = content;
        this.grade = grade;
    }

    public static Review create(Member member, Accommodation accommodation, String title, String content, int grade) {
        Review review = new Review(member, title, content, grade);
        review.initAccommodation(accommodation);
        review.createdDate = LocalDate.now();
        return review;
    }

    private void initAccommodation(Accommodation accommodation) {
        this.accommodation = accommodation;
        accommodation.getReviews().add(this);
    }

}
