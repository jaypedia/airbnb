package codesquad.airbnb.exception.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

@Slf4j
@RestControllerAdvice
public class ExceptionControllerAdvice {


    /**
     * @ModelAttribute 으로 bind Error 발생 시 발생하는 BindException 처리
     */
    @ExceptionHandler(BindException.class)
    public ResponseEntity response(BindException exception) {
        log.error("handle BindException", exception);
        BindingResult bindingResult = exception.getBindingResult();
        List<FieldError> fieldErrors = bindingResult.getFieldErrors();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(fieldErrors);
    }
}
