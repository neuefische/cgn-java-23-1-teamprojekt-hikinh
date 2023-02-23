package de.trailmate.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class Tour {
    String id;
    String title;
    String description;
    double startLongitude;
    double startLatitude;
    double endLongitude;
    double endLatitude;
    String category;



}
