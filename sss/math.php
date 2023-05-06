<?php

// BASE
$baseHealth = 5;
$healthIncrease = 5;
$baseStamina = 5;
$staminaIncrease = 5;
$baseMana = 5000;
$manaIncrease = 500;
$baseManaRegen = 0.0002 * (isset($_GET['ring']) && $_GET['ring'] ? 1.05 : 1);
// MODIFIERS
$alith = isset($_GET['alith']) && $_GET['alith'] ? 10000 : 0;
$scribe = isset($_GET['scribe']) && $_GET['scribe'] ? 5000 : 0;
$ambient = isset($_GET['ambient']) && $_GET['ambient'] ? 1 : 0.25;
$sunRune = isset($_GET['sun']) && $_GET['sun'] ? 1.2 : 1;
// LAYERS
$layers = [
    [
        'health' => 5000,
        'stamina' => 1000,
        'mana' => 0,
    ],
];

function numLayers(int $level): int
{
    /*$numLayers = 0;
    for ($l = 100; $l <= $level; $l++) {
        if ($l % 100 === 0 || ($l > 200 && $l % 50 === 0)) {
            $numLayers++;
        }
    }*/

   return floor($level > 200 ? $level / 50 - 2 : $level / 100);
}

function layerBonus(string $type, int $level): int
{
    global $layers;
    $numLayers = numLayers($level);
    $layerBonus = 0;
    for ($l = 0; $l < $numLayers; $l++) {
        $layerBonus += $layers[$l][$type];
    }
    return $layerBonus;
}

function health(int $level): int
{
    global $baseHealth, $healthIncrease;

    return $baseHealth + ($level - 1) * $healthIncrease + layerBonus('health', $level);
}

function stamina(int $level): int
{
    global $baseStamina, $staminaIncrease;

    return $baseStamina + ($level - 1) * $staminaIncrease + layerBonus('stamina', $level);
}

function mana(int $level): int
{
    global $baseMana, $alith, $scribe, $manaIncrease;
    return $baseMana + ($level - 1) * $manaIncrease - $alith - $scribe + layerBonus('mana', $level);
}

function manaRegen(int $level): float
{
    global $baseManaRegen, $ambient, $sunRune;
    $value = mana($level) * $baseManaRegen * pow(2, numLayers($level)) * $ambient * $sunRune;
    return $value > 0 ? $value : 0;
}

?>
<html>
<head>
    <style>
        table {
            border-collapse: collapse;
            margin: auto
        }

        tr {
            border-bottom: 1px solid black;
        }

        tr.breakpoint {
            background-color: #B11806;
            color: white;
        }

        td {
            padding: 5px 10px;
        }
    </style>
</head>
<body>
<table>
    <thead>
    <tr>
        <td class="level">Level</td>
        <td class="health">Health</td>
        <td class="stamina">Stamina</td>
        <td class="mana">Mana</td>
        <td class="mana-regen">Mana/second</td>
    </tr>
    </thead>
    <tbody>
    <?php for ($level = 1; $level <= 1000; $level++) : ?>
        <tr class="<?php if ($level % 100 === 0 || ($level > 200 && $level % 50 === 0)) echo 'breakpoint' ?>">
            <td class="level"><?php echo $level ?></td>
            <td class="health"><?php echo health($level) ?></td>
            <td class="stamina"><?php echo stamina($level) ?></td>
            <td class="mana"><?php echo mana($level) ?></td>
            <td class="mana-regen"><?php echo manaRegen($level) ?></td>
        </tr>
    <?php endfor; ?>
    </tbody>
</table>
</body>
</html>