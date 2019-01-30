-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 30 jan. 2019 à 23:18
-- Version du serveur :  10.1.37-MariaDB
-- Version de PHP :  7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `compacc_ihm`
--

-- --------------------------------------------------------

--
-- Structure de la table `arret_urgence`
--

CREATE TABLE `arret_urgence` (
  `arret` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `arret_urgence`
--

INSERT INTO `arret_urgence` (`arret`) VALUES
(1);

-- --------------------------------------------------------

--
-- Structure de la table `correcteur_courant_il`
--

CREATE TABLE `correcteur_courant_il` (
  `wn_s_IL` float NOT NULL,
  `ksi_IL` float NOT NULL,
  `Ki_IL` float NOT NULL,
  `Kp_IL` float NOT NULL,
  `Gw` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `correcteur_courant_il`
--

INSERT INTO `correcteur_courant_il` (`wn_s_IL`, `ksi_IL`, `Ki_IL`, `Kp_IL`, `Gw`) VALUES
(6, 5, 4, 96, 6);

-- --------------------------------------------------------

--
-- Structure de la table `correcteur_tension_vch`
--

CREATE TABLE `correcteur_tension_vch` (
  `wn_s_Vch` float NOT NULL,
  `ksi_Vch` float NOT NULL,
  `Ki_Vch` float NOT NULL,
  `Kp_Vch` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `correcteur_tension_vch`
--

INSERT INTO `correcteur_tension_vch` (`wn_s_Vch`, `ksi_Vch`, `Ki_Vch`, `Kp_Vch`) VALUES
(5, 6, 6, 2);

-- --------------------------------------------------------

--
-- Structure de la table `etat_system`
--

CREATE TABLE `etat_system` (
  `id` int(11) NOT NULL,
  `expediteur` text NOT NULL,
  `temps` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `etat_system`
--

INSERT INTO `etat_system` (`id`, `expediteur`, `temps`, `message`) VALUES
(1, 'Arduino', '19:47', 'Connected');

-- --------------------------------------------------------

--
-- Structure de la table `vac_eff_temps_reel`
--

CREATE TABLE `vac_eff_temps_reel` (
  `id` int(11) NOT NULL,
  `temps` text NOT NULL,
  `Vac_eff` float NOT NULL,
  `commentaire` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `vch_temps_reel`
--

CREATE TABLE `vch_temps_reel` (
  `id` int(11) NOT NULL,
  `temps` text NOT NULL,
  `Vch` float NOT NULL,
  `commentaire` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `_test_temps_reel`
--

CREATE TABLE `_test_temps_reel` (
  `id` int(11) NOT NULL,
  `tension` int(11) NOT NULL,
  `courant` int(11) NOT NULL,
  `temperature` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etat_system`
--
ALTER TABLE `etat_system`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `vac_eff_temps_reel`
--
ALTER TABLE `vac_eff_temps_reel`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `vch_temps_reel`
--
ALTER TABLE `vch_temps_reel`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `_test_temps_reel`
--
ALTER TABLE `_test_temps_reel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etat_system`
--
ALTER TABLE `etat_system`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `vac_eff_temps_reel`
--
ALTER TABLE `vac_eff_temps_reel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `vch_temps_reel`
--
ALTER TABLE `vch_temps_reel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `_test_temps_reel`
--
ALTER TABLE `_test_temps_reel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;