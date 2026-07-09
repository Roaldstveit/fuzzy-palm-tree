---
layout: default
title: Brukarveiledning for Ray-Ray
---

[Gå til heim](README.md)

## Tidspunkt for rapportering


### A-ordningen

- Nav har krav om å rapportere foregående måned innen den 5. i inneværende måned.
- Vanligivs rapporterer Nav til A-ordningen den 1. og den 20. hver måned. I tilfeller hvor dette faller på en rød-dag/helg kan rapportering bli utsatt til første påfølgende virkedag.
- Grunnen for å rapportere 2 ganger hver måned er for å redusere belastningen inn mot Skatteetaten sine systemer pga Nav sitt store volum.


### SFU - Skattefrie utbetalinger
  
* Nav har krav om å rapportere SFU årlig.
* Rapporteres til Grunnlagsdata som er en annen avdeling i Skatteetaten enn dit A-ordningen rapporteres.
* Vanligvis rapporterer Nav SFU den 1. hver måned. I tilfeller hvor dette faller på en rød-dag/helg kan rapportering bli utsatt til første påfølgende virkedag.


---
Statuskoder
---

```mermaid
---
config:
  htmlLabels: false
---
flowchart LR
    Innlastet["`Innlastet`"]
Innlastet-->SFU
Innlastet-->Transaksjoner_godkjent
Innlastet-->Resten

subgraph Ferdig validert og behandlet
    SFU
    Transaksjoner_godkjent
    Resten
    Transaksjoner_godkjent["`Transaksjoner godkjent`"]
end

    subgraph Generere SFU Melding
    SFU-->SFU_Oppgave
    SFU-->SFU_Oppgave_feil
    SFU_Oppgave-->SFU_Sendt
end

    subgraph Tilbakemelding Grunnlagsdata
    SFU_Sendt-->SFU_Mottatt
    SFU_Sendt-->SFU_Mottatt_med_advarsel
    SFU_Sendt-->SFU_Avvist


    SFU_Oppgave_feil["`SFU Oppgave Feil`"]
    SFU_Oppgave["`SFU Oppgave`"]
    SFU_Sendt["`SFU Sendt`"]
    SFU_Mottatt["`SFU Mottatt`"]
    SFU_Mottatt_med_advarsel["`SFU Mottatt med advarsel`"]
    SFU_Avvist["`SFU Avvist`"]
    
end

Rapporter-->A_melding_oppgave
Rapporter-->A-melding_oppgave_feil
Sendt-->Mottatt
Sendt-->Avvik_Retningslinje
Sendt-->Avvik_Retningslinje_Meldingsnivå
Sendt-->Avvik_Øyeblikkelig
Sendt-->Avvik_Øyeblikkelig_Meldingsnivå
Sendt-->Avvik_Avvist
Sendt-->Avvik_Avvist_Meldingsnivå

    subgraph Generere A-melding
    A_melding_oppgave-->Sendt
    
    A_melding_oppgave-->Feil_med_tilbakemelding
    A-melding_oppgave_feil
    A_melding_oppgave["`A-melding oppgave`"]
    A-melding_oppgave_feil["`A-melding oppgave feil`"]
    Feil_med_tilbakemelding["`Feil (med tilbakemelding)`"]
end

    subgraph Tilbakemelding A-ordningen
    Mottatt
end

    subgraph Individ Avvik
    Avvik_Retningslinje
    Avvik_Øyeblikkelig
    Avvik_Avvist
end

    subgraph Melding feiler
    Avvik_Retningslinje_Meldingsnivå
    Avvik_Øyeblikkelig_Meldingsnivå
    Avvik_Avvist_Meldingsnivå



    A-melding_oppgave_feil
    A_melding_oppgave["`A-melding oppgave`"]
    A-melding_oppgave_feil["`A-melding oppgave feil`"]
end




```


   
    

    end
    subgraph Transaksjoner godkjent
    b1-->b2
    end
    subgraph Transaksjoner Ikke rapporter
    c1-->c2
c3
    end
```






