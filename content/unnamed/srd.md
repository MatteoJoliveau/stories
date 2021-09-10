---
title: Unnamed RPG
summary: Systems Reference Document
template: rpg/page.html
description: Systems Reference Document for the Unnamed game system
draft: false
date: 2021-08-21
updated: 2021-08-21

extra:
  icon: fas fa-cogs

  badges:
    - name: OGL 1.0a
      image: https://img.shields.io/badge/license-OGL%201.0a-blue
      path: '@/ogl.md'
    - name: PDF
      image: https://img.shields.io/badge/download-pdf-green
      url: /unnamed/srd.pdf
    - name: HTML
      image: https://img.shields.io/badge/download-html-green
      url: /unnamed/srd.html
  author: Matteo Joliveau
---

_Version 0.1.0_  

## Introduction

Lorem ipsum


## Ability scores

There are five major ability scores in Unnamed: ***Strength***, ***Dexterity***, ***Endurance***, ***Perception*** and ***Will***. Each score has a value from -1 to 6, where -1 represents incompetence and 6 means excellence. An average human person will likely have 1 in most scores. Scores can be increased when levelling up, but can never exceed the value of 6.

***Strength (STR)*** represents your physical power and is used for every action where muscles are involved, such as athletic activities, climbing, fighting in hand-to-hand combat, smashing objects, etc.

***Dexterity (DEX)*** determines how agile you are, and how good your hand-eye coordination is. It is also representative of your reflexes
and ability to use precision tools (such as lockpicks or repair tools), handle delicate objects, move silently, perform acrobatics, and every other situation where finesse is required. It is also the primary score for ranged attacks using bows and crossbows, guns and rifles, throwing
knives, etc.

***Endurance (END)*** measures your ability to withstand physical strain. It is involved in every action where your body is put to the test, 
like resisting a hostile environment (smoke, acid, cold or hot air, etc), running or swimming for long periods of time, holding your breath, etc. It is also used when receiving damage in combat, as a character with high ***Endurance*** will suffer less physical damage than one with a lower score.

***Perception (PER)*** describes your ability to perceive the world around you. When you attempt to listen, smell, see, read another character's intentions, or otherwise use your senses, you are using your ***Perception***. 

***Will (WIL)*** is your mental fortitude. It represents how strong your mind is and how easily you can handle stressful situations, as well as
your persuasiveness and ability to bluff or influence others with your words. In settings where magic exists it is also the primary
score used for spellcasting.

### Determining Ability Scores

Scores can be determined via the following methods. Note that these are merely suggestions. You are invited to come up with your own system that might suit your game best.

#### Standard Array

The Standard Array is a default set of five numbers that allow to build a pretty well-balanced character for most scenarios. This is the recommended method. The numbers are the following:

```
3 2 1 0 -1
```

You can distribute them however you like. For instance, let's pretend we are making a raging, strong but pretty dull barbarian warrior. Their scores could be defined as such:

```
STR:  3
DEX:  1
END:  2
PER: -1
WIL:  0
```

#### Dice roll

Ability scores can be randomly determined by rolling `6d6`, lowering all results by 2, and discarding the lowest. For example, let's consider the following roll:

```
6 - 2 =  4
2 - 2 =  0
3 - 2 =  1
1 - 2 = -1
1 - 2 = -1
5 - 2 =  3
```

One of the two `-1` is discarded as the lowest number. We are then left with `4`, `0`, `1`, `-1` and `3`. Since we are building a sorcerer, a magical warrior without much physical prowess, we choose to distribute the numbers in the following way:

```
STR:  -1
DEX:   1
END:   0
PER:   3
WIL:   4
```

#### Point Buy

When using the Point Buy method, all ability scores start at the default value of `0`. You then have 5 points to spend among them to increase their value. You can also subtract points from them, which are then added back to your pool.

For example, we could build a cunning, survivalist Ranger with the following set:

```
STR:  0 - 1 = -1
DEX:  0 + 3 =  3
END:  0 + 0 =  0
PER:  0 + 2 =  2
WIL:  0 + 1 =  1
```

Notice that we subtracted one point from her ***Strength***, since she will often prefer to use her bow and arrows over a sword, and increased the other scores by a total of 6 points.

## Dice rolls

Every action in Unnamed is represented by a dice roll. Rolling dice brings an element of randomness to the game, and often leads to interesting choices from the players. All actions and rolls are done using a `d10`. Additionally, most rolls are associated with an [ability score](#abilitiy-scores). In that case, the relevant ability score is added to the result.

*Actions* happen when a player character or an NPC willfully do something. The result of the roll determines if the action succeeds or fails.
The GM decides what threshold must be reached or surpassed by the roll to be considered a success, otherwise the action fails. Additionally, the GM may decide to set a higher threshold that, if reached, will give the character an extra bonus. For example, a DEX roll of `8` would allow the player to safely leap over a crumbling bridge, but a `10` would also make the bridge collapse behind them, stopping the enemies in pursuit.

*Saves rolls* are made in response to an action. A save roll might be called to avoid an incoming attack, resist an intimidation attempt, or generally anytime something is *being done to* a character. If the roll is successful, the character avoids the danger. Otherwise, they succumb to the peril and the action follows through. FOr instance, let's say that our character barely made the jump over the bridge, but landed badly and had to grasp for a dangling rope to avoid falling down. The DM will call for a STR save roll to see if they manage to pull themselves to safety or fall in the canyon below.

An *opposing check* happens when two actions collide with each other. A prime example of opposing check is a grapple. Two characters struggling to overpower each other will perform an opposing STR check to see who will prevail. Note that performing an action to avoid another action is considered a save, not an opposing check. For example, plunging sideways to avoid an arrow is a DEX save, because the character is not trying to prevent the arrow from being shot, but rather is avoiding the consequences of the shot being fired. An opposing check in this situation would have been a standoff between two archers, with the winner of the roll shooting first.

Some common thresholds based on the difficulty of the actions are: `6` for a **simple** challenge, `8` for a **difficult** challenge, and `10` for a **nearly impossible** challenge. Note that these numbers are merely suggestions. GMs and adventure designers are encouraged to choose the roll thresholds that make the most sense for each specific scenario.

## Traits and Qualities

Traits in Unnamed are a framework for defining the abilities a character possesses. A Trait can be anything that describes an aspect of a character personality, profession, physical or mental characteristic, or even ethnicity. Unnamed doesn't have classes as seen in more traditional game systems, but instead uses Traits to compose them. This means that instead of defining a fixed set of classes, Unnamed provides the rules and logic to create any kind of class that can fit in the setting of an adventure. For the purpose of this document, we will often refer to the classic fantasy genre classes, such as barbarian, wizard, or paladin, but the game mechanics defined in this section can apply to every kind of setting. We often refer to classes as "Archetypes". For example, a sci-fi adventure could implement a Star Captain archetype by defining the *Captain* Trait. Combining them with other similar but complementary Traits, such as *Ex Soldier* and *Calculating Mind*, would make for a great veteran captain, hardened by many battles and ready to challenge the vastness of space. Note that all the Traits cited in this document are just used as examples. GMs, players, and adventure designers are encouraged to come up with their own interesting Traits.

A character can have many Traits, starting with two and adding more as they gain more levels, up to a maximum of five Traits. Each Trait is defined by a set of *Qualities*, a short expression that describes something about that Trait. Traits start with three Qualities, and new ones can be added when a character levels up, to a maximum of 6 Qualities per Trait. When a roll is called, the character can add all the Qualities that make sense for the action or save being rolled. Each Quality chosen adds `1` to the roll.

Let's pretend that we're making a rogue, a skilled thief used to survive in the slums and capable of breaking in undetected. We'll use the [Standard Array](#standard-array) method and come up with the following ability scores:

```
STR: -1
DEX:  3
END:  0
PER:  2
WIL:  1
```

We'll then start by adding the Trait *Thief*. This Trait is defined by three Qualities: *sneaky*, *lockpicks*, and *agile*. Notice how two of them are adjectives, *sneaky* and *agile*, while the other is a noun. Qualities can be whatever short expression best represents the character's abilities. It is important, however, to try and keep the Qualities short and generic. Choosing Qualities that are too specific makes them hard to apply to varying circumstances.

The second Trait we'll add is *Charlatan*, with the following Qualities: *bluff*, *disguise*, and *sleight of hand*.

Here is a summary table:

| Thief      | Charlatan       |
| ---------- | --------------- |
| sneaky     | bluff           |
| lockpicks  | disguise        |
| agile      | sleight of hand |

Now let's imagine we're trying to break into a well-guarded mansion by lockpicking the rear door and sneaking into the empty kitchen.

***Game Master***: "The door is solid, but you reckon that the lock is pretty simple to pick."  
***Rogue***: "I use my lockpicks and try to open it without making a sound"  
***GM***: "Very well, make a DEX roll for me."  
***R***: "Sure, and I can add my *sneaky* and *lockpicks* Qualities to it. I rolled a 4, plus my DEX of 3 and 2 Qualities, makes a 9."  
***GM***: "You manage to open the lock without alerting the guards, but as you enter the kitchen you hear footsteps coming from the corridor.   It's probably a sentry patrolling the lower floor, and they'll spot you if they pass before the kitchen. What do you do?"  
***R***: "Is there any place I can hide, like a covered table or a cupboard?"  
***GM***: "Yes, there is a cupboard above the stove, but you'll need to jump over the workbench to reach it."  
***R***: "I try to do that without hitting any of the cutlery or plates on the table."  
***GM***: "Roll another DEX action for me. Do you have anything related to acrobatic or athletic?"  
***R***: "Well, I'm *agile*, so that should help. I rolled a 6."  
***GM***: "Absolutely. With a total of 10 you manage to leap over the table and hide in the cupboard just before the guards reach the kitchen door. They don't see you and move on."

### A note on races and archetypes

Unnamed doesn't define any concept of race or class as seen in more traditional game systems. This is in hope of keeping the rules lightweight and flexible enough to be used in settings where these concept may not apply. However, these concepts can be easily implemented using Traits. For example, the Elf race can be implemented using the following Traits:

| Elf           | Magical          |
| ------------- | ---------------- |
| agile         | magic            |
| elven vision  | keen senses      |
| light weapons | magic resistance |

Being an *Elf*, they receive a boost when performing *agile* actions, such as acrobatic moves, jumps, and other DEX-related movement actions; *elven vision* improves PER rolls performed in the dark, or when looking at far away objects; *light weapons* makes them fight better when handling shortswords, light bows, and other small weapons. Also, being a *Magical* creature, they gain a bonus both when casting and defending from spells, and their *keen senses* makes them perceive their surroundings more easily. Remember that these are only suggestions. GMs and players may come up with whatever Qualities they prefer when creating their own unique Traits.

As you can see, Traits and Qualities allow to create interesting characters without locking them into predefined archetypes. Anything can be represented using a simple combination of words, and it gives much more freedom in defining a character personality than picking numbers from a predetermined table.

## Skills and Powers

Each character in Unnamed is an outstanding individual capable of performing incredible actions. These actions are represented by ***Skills*** and ***Powers***. A character starts with two Skills and two Powers, and can acquire more up to a maximum of five each. They can also choose to replace an existing Skill or Power with a new one. Skills and Powers are defined by their name, an associated ability score, and a short sentence describing their effect.

***Skills*** are basically a specific [action](#dice-rolls) with some special effect attached to it. They follow the same rules as regular actions, requiring a dice roll using the assosciated ability score modifier, applying their effect on success.

***Powers*** are special [saves](#dice-rolls) a character can make. They are passive abilities that allow them to more efficiently respond to threats and dangers. When a save roll is called for the associated ability score, if the effect applies to the situation, a character can use their power to increase their chances of success by rolling *two* dice instead of one, and keeping the highest result. Only one power can be used at a time. Some powers may have special effects like reducing incoming damage. This is described in more detail in the [Combat and damage](#combat-and-damage) section of this document.

As with Traits, there is no predefined list of Skills and Powers in this document. GMs, players, and adventure designers are encouraged to come up with their own interesting Skills and Powers that make sense in the context of the setting and the player characters.

Some examples of ***Skills***:

- ***Fire ball*** (WIL): You cast a flaming ball of magic that burns whathever it touches, dealing 2 points of *fire* damage
- ***Shapeshifting*** (WIL): You can hide your true appearance, changing your physical form for up to 5 minutes. 
- ***Raging charge*** (STR): You run towards the enemy with a mighty scream, mowing them down as you flail your weapons around. Requires a DEX saving roll from all of opponents in line with you.

Some examples of ***Powers***:

- ***Fireproof skin*** (END): You were forged in the flames of Hell itself, so fire struggles to hurt you. Reduces incoming *fire* damage by 2.
- ***Uncanny dodge*** (DEX): You plunge to the side and avoid an incoming blow or projectile, rolling on the floor and bouncing back up on your feet.
- ***Mind of steel*** (WIL): You can resist intimidation attemps, mind manipulation, and other forms of psychological warfare. Reduces incoming *psychic* damage by 1.

## Gauges

Every RPG needs a way to track values over time. One of such values that is basically omnipresent in game systems is *health*, a measure of a character's vitality. However, other systems may have a different set of values that a player must keep track of. For this reason, Unnamed doesn't impose a single named value, but rather provides a framework for how such values should work, leaving the implementation up to GMs and module designers. We call these values *gauges*. A gauge is an instrument used to display a measurement at a specific point in time. A Gauge in Unnamed is a numeric value that can change over time. Health is a good candidate for a Gauge because it has a specific value in time and can be increased or decreased in response to some external actions, like healing or taking damage. A cosmic horror game might want to have a second Gauge for tracking *sanity*, which can decrease as more horrific and outerwordly things happen to the characters. A space battle game might want to track the ship's fuel and shields.

Gauges can be implemented in a wide variety of way, but they will generally follow the same overall structure. What follows should be considered more like guidelines than actual rules, and may be adapted by the GM or adventure designer if needed.

Gauges express numeric values, generally in the range from 0 to 10. The amount by which they are increased or decreased depend on many factors, like the average value, the difficulty or harshness of the causing action, and generally the context of the game at play. A general rule of thumb is to use half of the Gauge's total range. Let's say that an average character at level 1 has a Health of 5. An average blow would deal 1 or 2 damages top, with heavy hits going up to 3, and only very powerful attacks reaching 4 or 5. Using a dice roll instead of using fixed values may lead to more interesting and unpredictable results, in which case it is recommended to use a `d4`, `d5` (a `d10` halved, rounded down) or `d6` to generate numbers in the aforementioned ranges. This method works well because it synergizes with the ability scores and action system. More information in the [Combat and damage](#combat-and-damage) section.

In certain scenarios other scales might work best. Another implementation might use the percentage scale (from 0 to 100) and use percent dice to roll. Characters might roll the dice and, if the result is lower that the Gauge's value, it gets decreased. This is often used for mental sanity, since as the sanity lowers the chances of a bad result increase.

Ultimately, GMs and designers should decide what works best for their specific setting and stories and come up with a suitable implementation.

## Combat and damage

Many RPG systems are heavily combat-focused, with complex rules and a high level of detail. Others are more narrative-driven and reduce fighting to a simple dice roll and a colorful explanation of the action from the player.

Unnamed aims at a comfortable middle ground between the two. The primary goal here is to provide enough structure to combat as to not leave everything up to the players and GM, while keeping the narrative flow going and allowing enough imagination and creativity to influence the outcome.

As we discussed in the section about [Gauges](#gauges), Unnamed doesn't have a specific "life points" statistic or damage system. Therefore, the combat system defined here is basically an implementation of a specific Gauge (and one of the only exceptions to Unnamed's rule "define frameworks, not implementations"). GMs and adventure design should treat this section as a reference implementation and adapt it to their specific scenario.

First of all, we need a life Gauge: a counter that can be decreased when taking damage and increased when healing. We will call this Gauge *Health Points*. Each character starts with 3 Health Points plus their END modifier.

As Gauges values are changed via *actions*, a combat encounter consists in two or more characters executing actions at each other. Actions can go from attacking in melee, to firing a gun or casting a spell. These actions are colled *attack rolls*. Each action is rolled using the specific ability score for the case. A general rule of thumb for scores to use is:

- ***STR***: hand to hand combat, melee weapons, and other types of physical damage
- ***DEX***: ranged combat using arrows, guns, artillery, and other throwing weapons
- ***WIL***: magical, psionic, or otherwise mental damange

Regardless of the type of action, the attack is always rolled against an END saving roll from the receiving character, unless stated otherwise by the action description or the GM (e.g. some spells requiring a WIL save). So if a warrior with STR `3` attacks a paladin with END `2`, rolling a `4` on the attack will require the defender to roll a `5` or higher to avoid receving damage (because `4 + 3 = (7)` must be higher than `5 + 2 = (7)` for the attack to be successful). If the receiving character has any [Power](#skills-and-powers) that might help it avoid, absorb, or otherwise mitigate the incoming blow (even if they are related to a different attribute then END), they can use it and roll two dice, keeping the highest result.

If an attack lands, damage is dealt based on the weapon used. Each weapon deals a fixed amount of damage based on its properties, such as the size class (heavy, light, medium), ammunition type (regular, explosive, armor piercing, etc) and other attributes defined by the GM or module developer. The exact amount of damage is defined in the weapon description. See the [Items and equipment](#items-and-equipment) section for more information. In general, damage follows the following scale:

- ***Light damage***: `1` or `2` points of damage, e.g. most swords, pistols, simple spells, bare fists
- ***Medium damage***: `3` points of damage, e.g. rifles, two handed axes and swords, warhammers, bare fists of a really big individual
- ***Heavy damage***: `4` or `5` points of damage, e.g. most explosives, high-energy rifles, really powerful magic, beasts and other huge creatures
- ***Extremely heavy damage***: `6` or more points of damage, e.g. cannons and artillery, high-power explosives like demolition charges, legendary beasts, divine-level magic

Damage always has an associated type, describing what kind of damage it deals. Example of damage types are: *piercing*, *cutting*, *elemental* (e.g. *fire*, *water*, *void*, etc), *explosive*, etc. This is important because on top of rolling two dice, some Powers might be able to reduce the incoming damage (up to completely negating it if they reduce it to zero) if they match one or more damage type. This is usually explained in the Power description. For example, *Fireproof skin* as described in the [Powers section](#skills-and-powers) reduces incoming fire damage by 2 points. Note that these effects are considered BEFORE rolling the save action, so if a Power completely negates an attack there is no need for a save roll.

Characters take turns attacking each others. The combat order is determined by the DEX score, with characters with higher DEX going first. If two characters have equal DEX, they should roll-off and
the winner goes first.

Some damage types might inflict some temporary malus to a character, in addition to just hurting them. These maluses are called *Conditions*, and are described in more detail in the [relevant section](#conditions).

If a character is reduced to `0` Health Points, the are *at Death's Door*. This special condition is described in more detail in the [relevant section](#at-death-s-door).

## Conditions

Lorem ipsum

## At Death's Door

Lorem ipsum

## Items and equipment

Lorem ipsum

## Character progression

Unnamed characters can grow and change over the course of their perilous adventures. This is reflected by their **level**, a number ranging from 1 to 15 indicating how powerful and capable they are. Each character usually start al level 1, indicating an average common person, although some GMs or game settings may call for a higher starting level. Every now and then, the GM can decide to grant a character some **experience points** (XP), to represent their growth and personal development. The frequency and amount of XPs gifted to characters can vary wildly based on the setting, the action that has been performed, the pacing the GM wants to maintain, etc. When a character reaches a certain number of XPs, they can **level up**, increasing their level by 1. Every time a character levels up they can increase an [ability score](#ability-scores) by 1 and add a new Quality to one of their existing Trait. Depending on the level reached they can also either gain a new [Trait](#traits-and-qualities), or unlock a new [Skill or Power](#skills-and-powers). 

The exact progression path is detailed in the following table:

| Experience Points  | Level | Bonus gained |  
| ------------------ | ----- | ------------ |
| 0                  | 1     |              |
| 300                | 2     | new Skill    |
| 900                | 3     | new Trait    |
| 2,700              | 4     |              |
| 6,500              | 5     | new Power    |
| 14,000             | 6     |              |
| 23,000             | 7     | new Skill    |
| 34,000             | 8     | new Trait    |
| 48,000             | 9     |              |
| 64,000             | 10    | new Power    |
| 85,000             | 11    |              |
| 100,000            | 12    |              |
| 120,000            | 13    | new Trait    |
| 140,000            | 14    | new Skill    |
| 165,000            | 15    | new Power    |

When levelling up a character, always keep in mind the following limitations:

| Characteristic                   | Starting at level 1 | Maximum |  
| -------------------------------- | ------------------- | ------- |
| Ability Scores (value per score) | [*]                 | 6       |
| Traits                           | 2                   | 5       |
| Qualities (per Trait)            | 3                   | 6       |
| Skills                           | 2                   | 5       |
| Powers                           | 2                   | 5       |

[*] see the [ability scores](#ability-scores) section for more information on how to determine the starting values

## GM tips

Lorem ipsum

## Acknowledgements

There are many games and systems that influenced me while designing Unnamed. I can't of course avoid mentioning the great precursor of all modern RPGs, [Dungeons & Dragons]. Many aspects of Unnamed are taken from the classic D20 and six-scores system pioneered by D&D.

A special mention goes to [Lady Blackbird] by [John Harper], for inspiring the Traits and Qualities system. Lady Blackbird uses a similar scheme of traits and tags that are used to influence rolls, although they are much more liberal in their application as our rolls are quite different. I also considered importing the dice pool and 50% dice mechanics from it, but I wanted something that could be played with just one or two dice for the entire table, as I don't feel that many beginner players have a huge collection of `d6` at hand.

From [Skyfarer], the wonderful RPG system set in the world of [Fallen London], I took the use of the D10 instead of the more classic D20. I noticed while playing Skyfarer that the lower numbers generated by the die were easier to grasp for new players, while still keeping a light number-crunching feel that is more commonly found in more complex RPG systems.

## Licensing

Unnamed™ RPG system Copyright © 2021 Matteo Joliveau. All Rights Reserved. Licensed under the [Open Game License 1.0a](@/ogl.md).

### Product Identity

The following items are hereby identified as Product Identity, as defined in the Open Game License 1.0a, Section 1(e), and are not Open Content: All trademarks, registered trademarks, proper names (characters, icons, etc.), dialogue, plots, storylines, locations, characters, artworks, and trade dress. (Elements that have previously been designated as Open Game Content are not included in this declaration.)

### Open Content

Except for material designated as Product Identity (see above), the game mechanics of this game product are Open Game Content, as defined in the Open Game License version 1.0a Section 1(d). No portion of this work other than the material designated as Open Game Content may be reproduced in any form without written permission.

### Attribution and Compatibility

Content based on this document following the terms of the license may express compatibility with the Unnamed system by using the following text:

> Compatible with the Unnamed™ RPG system version 0.1.0 (found at {{ get_url(path="@/unnamed/srd.md") }}), authored by Matteo Joliveau and licensed under the Open Game License 1.0a (found at {{ get_url(path="@/ogl.md") }}).

When publishing electronically, you can make "Unnamed™ RPG system version 0.1.0" a link to [{{ get_url(path="@/unnamed/srd.md") }}](@/unnamed/srd.md), and "Open Game License 1.0a" a link to [{{ get_url(path="@/ogl.md") }}](@/ogl.md), instead of printing the URLs separately, like so:

> Compatible with the [Unnamed™ RPG system version 0.1.0](@/unnamed/srd.md), authored by Matteo Joliveau and licensed under the [Open Game License 1.0a](@/ogl.md).

This attribution counts as "Independent Agreement" as expressed by the terms of the Open Game License 1.0a, Section 7.

[Dungeons & Dragons]: https://dnd.wizards.com/
[Lady Blackbird]: https://ladyblackbird.org
[John Harper]: http://www.onesevendesign.com/
[Skyfarer]: https://failbetter-games.itch.io/skyfarer
[Fallen London]: https://www.fallenlondon.com
