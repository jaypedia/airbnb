package codesquad.airbnb.booking.repository;


import codesquad.airbnb.booking.domain.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}
