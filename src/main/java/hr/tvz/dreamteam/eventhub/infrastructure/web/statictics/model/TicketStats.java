package hr.tvz.dreamteam.eventhub.infrastructure.web.statictics.model;

public interface TicketStats {
    String getCategory();

    Long getTicketsSold();

    Long getOverallTickets();

    Double getTicketPrice();
}