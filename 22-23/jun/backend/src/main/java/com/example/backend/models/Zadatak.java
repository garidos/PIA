package com.example.backend.models;

public class Zadatak {
    private int id;
    private String sadrzaj;
    private boolean obavljen;
    private String tip;
    private String dodeljen;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getSadrzaj() {
        return sadrzaj;
    }
    public void setSadrzaj(String sadrzaj) {
        this.sadrzaj = sadrzaj;
    }
    public boolean getObavljen() {
        return obavljen;
    }
    public void setObavljen(boolean obavljen) {
        this.obavljen = obavljen;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }
    public String getDodeljen() {
        return dodeljen;
    }
    public void setDodeljen(String dodeljen) {
        this.dodeljen = dodeljen;
    }
    public Zadatak(int id, String sadrzaj, boolean obavljen, String tip, String dodeljen) {
        this.id = id;
        this.sadrzaj = sadrzaj;
        this.obavljen = obavljen;
        this.tip = tip;
        this.dodeljen = dodeljen;
    }


    
}
