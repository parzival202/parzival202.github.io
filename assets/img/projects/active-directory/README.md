# Captures sélectionnées - Lab IAM

Projet : Administration IAM / Active Directory / GPO / délégation DHCP-DNS / IIS / audit

Ces captures ont été sélectionnées pour une page projet de portfolio. Les captures trop redondantes ou contenant des informations personnelles inutiles (ex : téléphone, email, écrans LastPass trop sensibles) ont été évitées.

## Liste des captures

01. `01_01_ad_ou_structure.png` - Structure des OU Active Directory (IAM Class, Users, Computers, Groups). (page 2 du PDF)

02. `02_02_ad_user_creation.png` - Création d’un utilisateur standard dans Active Directory. (page 3 du PDF)

03. `03_03_remote_desktop_group.png` - Ajout de l’utilisateur au groupe Utilisateurs du Bureau à distance. (page 4 du PDF)

04. `04_04_standard_user_limited_privileges.png` - Test montrant les privilèges limités du compte standard dans ADUC. (page 6 du PDF)

05. `05_05_gpo_link_creation.png` - Création d’une GPO liée à l’OU personnelle. (page 13 du PDF)

06. `06_06_gpo_password_policy_initial.png` - Configuration initiale de la politique de mot de passe. (page 15 du PDF)

07. `07_07_gpo_password_policy_hardened.png` - Renforcement de la politique de mot de passe : historique, longueur minimale, complexité. (page 18 du PDF)

08. `08_08_account_lockout_policy.png` - Configuration de la politique de verrouillage de compte. (page 21 du PDF)

09. `09_09_account_locked_result.png` - Résultat du test : compte utilisateur verrouillé après tentatives échouées. (page 21 du PDF)

10. `10_10_account_unlock_aduc.png` - Déverrouillage du compte utilisateur via les propriétés ADUC. (page 22 du PDF)

11. `11_11_dhcp_admin_ou.png` - OU Admins utilisée pour la délégation de privilèges. (page 24 du PDF)

12. `12_12_create_dhcp_admin.png` - Création du compte administrateur DHCP délégué. (page 25 du PDF)

13. `13_13_dhcp_admin_group_membership.png` - Ajout du compte admin DHCP au groupe Administrateurs DHCP. (page 26 du PDF)

14. `14_14_create_dns_admin.png` - Création du compte administrateur DNS délégué. (page 27 du PDF)

15. `15_15_dns_admin_group_membership.png` - Ajout du compte admin DNS au groupe DnsAdmins. (page 28 du PDF)

16. `16_16_dhcp_console.png` - Ouverture de la console DHCP avec le compte délégué. (page 30 du PDF)

17. `17_17_dhcp_scope_wizard.png` - Assistant de création d’une nouvelle étendue DHCP. (page 30 du PDF)

18. `18_18_dhcp_scope_range.png` - Configuration de la plage d’adresses DHCP. (page 31 du PDF)

19. `19_19_dns_no_rights_with_dhcp_admin.png` - Console DNS ouverte par admin DHCP avec droits de modification limités. (page 32 du PDF)

20. `20_20_dns_console_zones.png` - Console DNS avec zones visibles pour admin DNS. (page 35 du PDF)

21. `21_21_dns_txt_record_creation.png` - Création d’un enregistrement TXT dans la zone DNS. (page 37 du PDF)

22. `22_22_dns_txt_record_visible.png` - Enregistrement TXT visible dans la zone DNS. (page 39 du PDF)

23. `23_23_dhcp_no_rights_with_dns_admin.png` - Vérification : admin DNS ne peut pas administrer DHCP. (page 40 du PDF)

24. `24_24_dns_admin_no_ad_user_creation.png` - Vérification : admin DNS ne peut pas créer d’utilisateur AD. (page 41 du PDF)

25. `25_25_security_policy_audit_navigation.png` - Navigation vers les stratégies d’audit dans gpedit. (page 43 du PDF)

26. `26_26_audit_success_failure_enabled.png` - Activation de l’audit des privilèges en succès et échec. (page 47 du PDF)

27. `27_27_security_event_logs.png` - Visualiseur d’événements avec journaux de sécurité. (page 51 du PDF)

28. `28_28_security_event_detail.png` - Détail d’un événement de sécurité lié aux actions effectuées. (page 51 du PDF)

29. `29_29_pam360_password_administrator.png` - Interface PAM360 avec rôle Password Administrator. (page 57 du PDF)

30. `30_30_pam360_password_user.png` - Interface PAM360 avec rôle Password User. (page 58 du PDF)

31. `31_31_pam360_user_access_report.png` - Rapport PAM360 d’accès utilisateur. (page 58 du PDF)

32. `32_32_iis_security_features.png` - Installation des fonctionnalités de sécurité IIS. (page 61 du PDF)

33. `33_33_iis_default_page.png` - Page par défaut IIS accessible après installation. (page 62 du PDF)

34. `34_34_iis_authentication_settings.png` - Configuration des méthodes d’authentification IIS. (page 66 du PDF)

35. `35_35_iis_basic_auth_login_prompt.png` - Fenêtre de connexion de l’authentification de base IIS. (page 66 du PDF)

36. `36_36_ad_security_group_creation.png` - Création d’un groupe de sécurité Active Directory. (page 75 du PDF)

37. `37_37_ad_groups_created.png` - Groupes de sécurité créés dans l’OU Groups. (page 79 du PDF)

38. `38_38_iis_group_allow_permissions.png` - Autorisations d’accès IIS accordées au groupe Finance. (page 83 du PDF)

39. `39_39_group_based_access_denied.png` - Test d’accès refusé pour un utilisateur non autorisé. (page 87 du PDF)

40. `40_40_audit_policies_success_failure.png` - Politiques d’audit configurées en succès et échec. (page 88 du PDF)

41. `41_41_adauditplus_dashboard.png` - Dashboard ADAuditPlus connecté avec un rôle Technician. (page 90 du PDF)

42. `42_42_adauditplus_created_users_report.png` - Rapport ADAuditPlus des utilisateurs récemment créés. (page 91 du PDF)

43. `43_43_adauditplus_permission_changes_report.png` - Rapport ADAuditPlus sur les changements de permissions. (page 91 du PDF)

44. `44_44_adauditplus_logon_failures_report.png` - Rapport ADAuditPlus sur les échecs de connexion. (page 92 du PDF)


## Utilisation recommandée dans le portfolio

- Page projet : `projects/iam-active-directory.html`

- Dossier conseillé : `assets/img/projects/iam/`

- Rapport PDF conseillé : `assets/reports/rapport-lab-iam.pdf`


Résumé projet : Mise en place d’un environnement IAM basé sur Windows Server 2019, Active Directory Domain Services, délégation de rôles DHCP/DNS, GPO de mots de passe/verrouillage, authentification IIS, contrôle d’accès par utilisateur/groupe et audit avec journaux Windows/ADAuditPlus.
