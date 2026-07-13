# Informasjonsflyt rundt Rapportering Av Ytelser

```mermaid
---
config:
  htmlLabels: false
---
flowchart LR
UR e1@==> |Laster inn| RAY;
e1@{animate: true}
RAY e2@==> |A-meldinger| A-ordningenfil
e2@{animate: true}
RAY e4@==> |SFU-meldinger| SFU-fil
e4@{animate: true}
   
 subgraph Utbetalingsseksjonen
    UR-->Avstemming
    Avstemming-->RAY
    RAY--> |Visning A-meldinger/SFU-meldinger|Arbeidsflate_RAY
    Arbeidsflate_RAY -->Økonomiportal
    Arbeidsflate_RAY["`Arbeidsflate RAY`"]
    RAY e3@==>Avstemming
    e3@{animate: true}
    end

subgraph Nav
    Inntektsopplysninger
    Dokprod
    PDL
    Joark
    Dokprod-->Joark  
    end

subgraph Skatteetaten
    A-ordningen
    Skatteoppgjør
    Grunnlagsdata
    SITS
    end

subgraph Skatteetaten filtjeneste
  A-ordningenfil
  SFU-fil
  ALTINN
  Tilbakemeldingskvittering
  A-ordningenfil["`A-melding`"]
  SFU-fil["`SFU-melding`"]
end

subgraph Statistisk Sentralbyrå
  SSB
end

subgraph Digdir
  KRR
end

Tilbakemeldingskvittering e6@==>RAY
ALTINN-->RAY
ALTINN-->Tilbakemeldingskvittering
SFU-fil-->Grunnlagsdata
RAY-->PDL
RAY-->KRR
A-ordningenfil-->A-ordningen
A-ordningen-->Skatteoppgjør
A-ordningen-->Inntektsopplysninger
Dokprod-->SITS
RAY e5@==> |Årsoppgaver| Dokprod
Joark--> |Visning årsoppgave|Arbeidsflate_RAY
A-ordningen-->ALTINN
Grunnlagsdata-->ALTINN
A-ordningen-->SSB
Inntektsopplysninger["`Nav Inntektsopplysninger`"]
RAY["` **RAY** `"]
ALTINN["`ALTINN Events`"]
e5@{animate: true}
e6@{animate: true}



```



**Beskrivelse av interaksjoner**
|**Forkortelse**|**Navn**|**Beskrivelse**|**Linker**|
|:------|:------|:------|:------|
|UR|Utbetalingsreskontro|Håndterer all betalingsformidling mot kontofører (bank) og regnskapsføring på individ.|Team Pengeflyt|
|PDL|Persondataløsningen|Brukes til å hente personopplysninger som navn og adresse.|[PDL Dok](https://pdl-docs.ansatt.nav.no/ekstern/index.html#_m%C3%A5l_og_hensikt)|
|KRR|Kontakt- og reservasjonsregisteret|Brukes til å hente målform på årsoppgave.|Forvaltes av Digdir|
|Dokprod|Dokumentløsninger|Ansvarlig for produksjon og distribusjon av årsoppgaver (Hovedoppgave årlig, endringsoppgave 2 ganger pr mnd)|[Dokprod Dok](https://confluence.adeo.no/spaces/TDOK/pages/340826428/Team+Dokumentl%C3%B8sninger+Admin)|
|Joark||Database med dokumenter, brukes til å hente frem arkivert versjon av årsoppgave.|Forvaltes av Dokprod|
|SSB|Statistisk sentralbyrå|Bruker opplysninger fra A-ordningen til å utarbeide statistikker og forskning.||
|SITS|Skatteetatens IT- og servicepartner|Håndterer utsending av brev.||
