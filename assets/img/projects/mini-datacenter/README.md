# Captures sélectionnées - Lab Sécurité Datacenter

Projet : Mini Datacenter sécurisé avec Palo Alto, segmentation en 5 zones, services WEB/FTP/SSH, règles inter-zones et restrictions horaires.

Ces images ont été extraites et triées depuis le rapport PDF pour être utilisées dans le portfolio GitHub Pages.

## Captures sélectionnées

### 01. 01_architecture-mini-datacenter.png
- Description : Schéma global de l’architecture Mini Datacenter JAYDEN SARL avec Palo Alto central, zones Admin/RH/DAF/WEB/FTP et serveurs exposés.
- Utilisation conseillée : Image principale de la page projet / hero du projet

### 02. 02_vmware-vmnets-5-zones.png
- Description : Création des VMnet isolés dans VMware Virtual Network Editor pour segmenter les zones réseau.
- Utilisation conseillée : Preuve de la segmentation réseau dans VMware

### 03. 03_palo-alto-5-interfaces-vmware.png
- Description : Paramètres de la VM Palo Alto avec plusieurs interfaces réseau assignées aux zones.
- Utilisation conseillée : Illustrer le pare-feu central multi-zones

### 04. 04_ubuntu-ip-addr-web-ftp.png
- Description : Résultat ip addr show sur le serveur Ubuntu avec deux interfaces pour les zones WEB et FTP.
- Utilisation conseillée : Preuve de configuration IP serveur multi-zone

### 05. 05_palo-alto-hostname-management.png
- Description : Interface Palo Alto montrant le nom d’hôte AKROU configuré dans Device > Setup > Management.
- Utilisation conseillée : Contexte d’administration Palo Alto

### 06. 06_palo-alto-interfaces-layer3.png
- Description : Liste des interfaces Palo Alto configurées en Layer 3 avec les IP et zones associées.
- Utilisation conseillée : Capture clé pour la configuration des interfaces

### 07. 07_palo-alto-zones-security.png
- Description : Liste des cinq zones de sécurité créées : Admin, DAF, FTP, RH et Web.
- Utilisation conseillée : Preuve de création des zones de sécurité

### 08. 08_virtual-router-routes-statiques.png
- Description : Table de routage du Virtual Router avec les routes statiques inter-zones.
- Utilisation conseillée : Illustrer la partie routage

### 09. 09_apache-service-running.png
- Description : Statut du service Apache2 actif sur le serveur Ubuntu.
- Utilisation conseillée : Preuve du service Web opérationnel

### 10. 10_test-acces-web-timeo.png
- Description : Navigateur affichant le portail TIMEO depuis un poste autorisé.
- Utilisation conseillée : Preuve de test applicatif Web

### 11. 11_vsftpd-service-running.png
- Description : Statut du service vsftpd actif sur le serveur Ubuntu.
- Utilisation conseillée : Preuve du service FTP opérationnel

### 12. 12_ssh-service-running.png
- Description : Statut du service SSH actif sur Ubuntu Server.
- Utilisation conseillée : Preuve du service SSH disponible

### 13. 13_address-object-user-rh.png
- Description : Création d’un objet d’adresse Palo Alto pour user-RH en IP Netmask /32.
- Utilisation conseillée : Illustrer la méthode de création d’objets

### 14. 14_address-objects-list.png
- Description : Liste des objets d’adresses créés : PC-Admin, srv-FTP, srv-WEB, user-DAF et user-RH.
- Utilisation conseillée : Preuve de l’inventaire d’objets de sécurité

### 15. 15_schedule-horaires-travail.png
- Description : Plage horaire Horaires-Travail configurée pour les accès WEB/FTP.
- Utilisation conseillée : Illustrer les règles temporelles

### 16. 16_schedules-list.png
- Description : Liste des objets schedule Horaires-Travail et Horaires-SSH.
- Utilisation conseillée : Vue globale des contraintes horaires

### 17. 17_policy-source-user-rh.png
- Description : Onglet Source de la règle Acces-RH-WEB-FTP avec Zone-RH et user-RH.
- Utilisation conseillée : Détail workflow de création de règle

### 18. 18_policy-destination-web-ftp.png
- Description : Onglet Destination de la règle avec zones WEB/FTP et objets serveurs.
- Utilisation conseillée : Détail workflow de création de règle

### 19. 19_policy-application-web-ftp.png
- Description : Onglet Application de la règle autorisant web-browsing et ftp.
- Utilisation conseillée : Détail workflow de création de règle

### 20. 20_policy-action-allow-schedule.png
- Description : Onglet Actions avec Allow et application du schedule Horaires-Travail.
- Utilisation conseillée : Détail workflow de création de règle

### 21. 21_security-policies-overview.png
- Description : Liste des règles principales dans Policies > Security : accès RH/DAF, blocage Admin, règles par défaut.
- Utilisation conseillée : Capture importante pour montrer la politique de filtrage

### 22. 22_schedule-horaires-ssh.png
- Description : Plage horaire Horaires-SSH configurée de 7h00 à 19h00.
- Utilisation conseillée : Preuve du contrôle d’accès SSH temporel

### 23. 23_all-security-rules-created.png
- Description : Vue globale des règles créées : WEB/FTP, blocage Admin, SSH Admin, blocage SSH autres.
- Utilisation conseillée : Capture clé pour la page de conclusion du projet

### 24. 24_management-interface-permitted-ip.png
- Description : Configuration de l’interface Management Palo Alto avec IP autorisée 172.23.28.242 uniquement.
- Utilisation conseillée : Preuve de restriction du management au PC-Admin

## Conseil d’intégration dans le portfolio
Place ces fichiers dans : `assets/img/projects/mini-datacenter/`
Le PDF complet peut être placé dans : `assets/reports/lab-securite-datacenter.pdf`

Pour une page projet fluide, utilise 4 à 6 images principales visibles directement, puis une galerie ou un bouton “Voir plus de captures”.