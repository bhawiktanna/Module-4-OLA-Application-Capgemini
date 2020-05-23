public with sharing class carPoolOLA {
    public carPoolOLA() {

    }

    @AuraEnabled
    public static void newCar(String dname,String cno,String ctype,String rtype){
        Car_Pool__c nc= new Car_Pool__c(Name =dname,Car_Number__c= cno,Car_Type__c=ctype,Ride_Type__c=rtype);
        insert nc;
    }
}
