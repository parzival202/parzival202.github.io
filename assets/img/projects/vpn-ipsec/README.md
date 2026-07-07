# Captures sélectionnées - Lab WAN ROUTEUR / VPN IPsec FortiGate

Ces images ont été extraites et triées depuis le rapport PDF fourni. Les captures les plus pertinentes pour une page projet portfolio ont été conservées. Les clés/mots de passe visibles dans les phases d'authentification VPN ont été masqués.

## Liste des captures

- `01_architecture_topologie_wan_fortigate.png` : Schéma global de l’architecture WAN : deux FortiGate, réseaux LAN/management/WAN et serveur FTP.
- `02_vmware_vmnet_plan_adressage.png` : Plan des VMnet VMware et sous-réseaux utilisés dans le lab.
- `03_fortigate_wan_site_siege_cli.png` : Configuration CLI de l’interface WAN du FortiGate du siège.
- `04_fortigate_wan_site_b_cli.png` : Configuration CLI de l’interface WAN du FortiGate de la succursale.
- `05_fortigate_lan_succursale_cli.png` : Configuration CLI de l’interface LAN de la succursale.
- `06_fortigate_lan_siege_cli.png` : Configuration CLI de l’interface LAN du siège.
- `07_filezilla_server_user_permissions.png` : Paramétrage FileZilla Server : utilisateur dédié et droits sur le dossier partagé.
- `08_dossier_ftp_goualo_sa.png` : Dossier FTP GOUALO-sa et fichier de test hébergé côté siège.
- `09_vpn_site_siege_setup.png` : Assistant FortiGate : création du tunnel VPN IPsec côté siège.
- `10_vpn_site_siege_authentication_redacted.png` : Phase d’authentification du VPN côté siège - PSK masquée.
- `11_vpn_site_siege_policy_routing.png` : Définition des sous-réseaux locaux/distants et politique de routage côté siège.
- `12_vpn_site_b_setup.png` : Assistant FortiGate : création du tunnel VPN IPsec côté succursale.
- `13_vpn_site_b_authentication_redacted.png` : Phase d’authentification du VPN côté succursale - PSK masquée.
- `14_vpn_site_b_policy_routing.png` : Définition des sous-réseaux locaux/distants et politique de routage côté succursale.
- `15_vpn_tunnel_site_siege_up.png` : État du tunnel IPsec côté siège : tunnel Up.
- `16_vpn_tunnel_site_b_up.png` : État du tunnel IPsec côté succursale : tunnel Up.
- `17_ping_serv_bd_vers_user1.png` : Test ping réussi depuis le serveur du siège vers User-1.
- `18_ping_user1_vers_serv_bd.png` : Test ping réussi depuis User-1 vers le serveur du siège.
- `19_filezilla_client_ftp_success.png` : Connexion FTP réussie depuis la succursale vers le serveur du siège via le tunnel IPsec.
