package codesquad.airbnb.exception;

public class TooManyImageException extends RuntimeException {

    public TooManyImageException() {
    }

    public TooManyImageException(String message) {
        super(message);
    }
}
