package codesquad.airbnb.booking.repository;


import codesquad.airbnb.booking.domain.Booking;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class BookingRepository {

    private final EntityManager em;

    public void save(Booking booking) {
        em.persist(booking);
    }

    public Optional<Booking> findById(Long id) {
        return Optional.ofNullable(em.find(Booking.class, id));
    }
}
