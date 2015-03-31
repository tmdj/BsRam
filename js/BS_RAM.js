/**
 * Created by tlati on 26/12/2014.
 */
$(document).ready(function () {
    $(document).foundation();
    $("#DateDebutAcceuil").datepicker();
    $("#DateDebutLissage").datepicker();
    $("#NombreJoursOuvrablesCongesPayesAcquisParMoisTravaille").val("2.5");
});

function updateSemainesCongesAcquisesSurPeriodeLissage() {
    $("#SemainesCongesAcquisesSurPeriodeLissage").val($("#NombreMoisConsidereesPourLissage").val() * $("#NombreJoursOuvrablesCongesPayesAcquisParMoisTravaille").val() / 6);
}

function updateNombreSemainesConsidereesPourLissage(){
    $("#NombreSemainesConsidereesPourLissage").val((52/12)*$("#NombreMoisConsidereesPourLissage").val())
}