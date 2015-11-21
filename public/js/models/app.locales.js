'use strict';

// ======================================================
// =                        语言                        =
// ======================================================
app.factory("Locale", function() {
	var Locale = function(key) {
		var _lang = Locale.langMap[Locale.lang][key];
		if(_lang) {
			return _lang;
		} else {
			_WARN("LANG", 0, "No Lang:", key);
			return "> " + key;
		}
	};

	Locale.lang = "cn";
	Locale.langMap = {};

	// ========================================
	// =                  CN                  =
	// ========================================
	Locale.langMap["cn"] = {
		AppName: "Dota2 KV 编辑器",
		Home: "首页",
		Unit: "单位",
		Hero: "英雄",
		Ability: "技能",
		Save: "保存",
		Item: "物品",
		Config: "配置",
		Language: "语言",
		Common: "常规",
		SoundAbility: "声音|技能",
		AttackDefenseSpeed: "攻|防|速",
		HPMPVision: "血|法|视野",
		Others: "其他",
		Creature: "生物",
		Wearable: "饰品",
		Default: "默认",
		Unassigned: "未分配",
		Error: "错误",
		Exit: "退出",

		Key: "键",
		Value: "值",
		NewKV: "新建键值",
		New: "新建",
		Loading: "载入中",
		Name: "名称",
		Comment: "注释",
		Unnamed: "【未命名】",
		NewName: "新名称",
		Rename: "重命名",
		OldName: "原名称",
		ForkLang: "复制多语言描述",

		// 属性
		BaseClass: "基类",
		AbilityTextureName: "图标",
		ScriptFile: "脚本文件",
		AbilityBehavior: "行为",

		AbilityUnitTargetType: "目标类型",
		AbilityUnitTargetTeam: "目标队伍",
		AbilityUnitTargetFlags: "目标标记",
		AbilityUnitDamageType: "伤害类型",

		AbilityType: "技能类型",
		HotKeyOverride: "热键",
		MaxLevel: "最大等级",
		RequiredLevel: "需求等级",
		LevelsBetweenUpgrades: "升级间隔",

		AbilityCastPoint: "施法前摇",
		AbilityCastAnimation: "施法动作",

		AbilityCooldown: "冷却时间",
		AbilityManaCost: "魔法消耗",
		AbilityCastRange: "施法距离",
		AbilityCastRangeBuffer: "施法距离缓冲",

		AbilityChannelTime: "持续施法时间",
		AbilityChannelledManaCostPerSecond: "持续施法每秒耗魔",
		AOERadius: "AOE范围",

		// 物品
		ID: "ID",
		ItemCost: "花费",
		ItemDroppable: "可丢弃",
		ItemSellable: "可出售",
		ItemShareability: "共享方式",

		ItemPurchasable: "可购买",
		ItemDeclarations: "购买提醒",
		ItemKillable: "可摧毁",
		ItemAlertable: "可提醒",
		ItemPermanent: "永久的",
		ItemInitialCharges: "初始数量",
		ItemRequiresCharges: "需要数量才能使用",
		ItemStackable: "可叠加",
		SideShop: "基地商店",
		SecretShop: "神秘商店",
		ItemCastOnPickup: "拾起使用",
		ItemQuality: "物品质量",
		ItemShopTags: "商店标签",
		ItemAliases: "物品别名",
		MaxUpgradeLevel: "物品最大等级",
		ItemBaseLevel: "物品基础等级",
		ItemRecipe: "合成菜单",
		ItemResult: "合成结果",
		ItemRequirements: "合成需要",
		ItemDisassembleRule: "可拆分",

		// 修饰器
		_name: "名称",
		_comment: "备注",
		Attributes: "属性",
		Duration: "持续时间",
		Passive: "默认拥有",
		TextureName: "图标",
		IsBuff: "正面效果",
		IsDebuff: "负面效果",
		IsHidden: "隐藏图标",
		IsPurgable: "可净化",
		AllowIllusionDuplicate: "幻象可继承",
		_IsAura: "作为光环",
		Aura: "光环赋予的修饰器",
		Aura_Radius: "光环影响半径",
		Aura_Teams: "光环影响队伍",
		Aura_Types: "光环影响类型",
		Aura_Flags: "光环影响标记",
		Aura_ApplyToCaster: "光环影响拥有者",
		EffectName: "特效名",
		EffectAttachType: "特效绑定位置",
		StatusEffectName: "状态特效",
		StatusEffectPriority: "状态特效优先级",
		OverrideAnimation: "覆盖动画",
		ThinkInterval: "计时间隔",

		Properties: "属性",
		States: "状态",
		Events: "事件",
		Operation: "操作",

		"Event Type": "事件类型",

		// 单位
		Ability1: "技能1",
		Ability2: "技能2",
		Ability3: "技能3",
		Ability4: "技能4",
		Ability5: "技能5",
		Ability6: "技能6",
		Ability7: "技能7",
		Ability8: "技能8",
		Ability9: "技能9",
		Ability10: "技能10",
		Ability11: "技能11",
		Ability12: "技能12",
		Ability13: "技能13",
		Ability14: "技能14",
		Ability15: "技能15",
		Ability16: "技能16",
		AbilityLayout: "技能布局",
		ArmorGain: "护甲获得",
		ArmorPhysical: "物理护甲",
		AutoAttacksByDefault: "自动攻击",
		AttachWearables: "穿戴物",
		AttackAcquisitionRange: "攻击接受范围",
		AttackAnimationPoint: "攻击动画点",
		AttackCapabilities: "攻击能力",
		AttackDamageMax: "攻击最大值",
		AttackDamageMin: "攻击最小值",
		AttackDamageType: "攻击伤害类型【无效】",
		AttackRange: "攻击范围",
		AttackRangeBuffer: "攻击缓冲范围",
		AttackRate: "攻击速率",
		BoundsHullName: "碰撞体积",
		BountyGain: "奖励获得",
		BountyXP: "经验奖励",
		BountyGoldMax: "金钱奖励最大值",
		BountyGoldMin: "金钱奖励最小值",
		CanRespawn: "可复活？",
		CanBeDominated: "可被支配",
		CombatClassAttack: "攻击类型",
		CombatClassDefend: "防御类型",
		ConsideredHero: "作为英雄",
		DamageGain: "伤害获得",
		DisableClumpingBehavior: "聚集行为",
		DisableResistance: "控制抗性",
		HasInventory: "有物品栏",
		HealthBarOffset: "生命条偏移",
		HPGain: "生命获得",
		IsAncient: "远古单位",
		IsNeutralUnitType: "中立单位",
		Level: "等级",
		MagicalResistance: "魔法抗性",
		MagicResistGain: "魔抗获得",
		MinimapIcon: "小地图图标",
		MinimapIconSize: "小地图图标尺寸",
		Model: "模型",
		ModelScale: "模型比例",
		MovementCapabilities: "移动能力",
		MovementSpeed: "移动速度",
		MovementTurnRate: "转身速率",
		MoveSpeedGain: "移动速度获得",
		RingRadius: "选取框半径",
		ShouldDoFlyHeightVisual: "空中高度？",
		StatusHealth: "基础生命值",
		StatusHealthRegen: "基础生命恢复",
		StatusMana: "基础魔法值",
		StatusManaRegen: "基础魔法恢复",
		StatusStartingMana: "初始魔法值",
		TeamName: "队伍名称",
		UnitLabel: "单位标签",
		UnitRelationShipClass: "单位相关类型",
		VisionDaytimeRange: "白天视野",
		VisionNighttimeRange: "晚上视野",
		WakesNeutrals: "唤醒单位",
		XPGain: "经验获得",
		SoundSet: "声音集",
		GameSoundsFile: "游戏声音文件",
		IdleSoundLoop: "闲置声音",
		SelectionGroup: "选择组",
		SelectOnSpawn: "出生时选取",
		IgnoreAddSummonedToSelection: "忽略选择召唤单位",
		ProjectileModel: "投射物模型",
		ProjectileSpeed: "投射物速度",
		HasAggressiveStance: "拥有侵略姿势",
		FollowRange: "跟随距离",
		vscripts: "脚本文件",

		NoWearable: "没有饰品",
		NoUnassigned: "没有未分配值",

		// 事件
		OnSpellStart: "开始施法",
		OnAbilityStart: "技能开始",
		OnAbilityExecuted: "释放技能",
		OnAbilityEndChannel: "停止施法",
		OnAbilityPhaseStart: "开始阶段（转身之前）",
		OnAttack: "攻击",
		OnAttacked: "被攻击",
		OnAttackAllied: "攻击队友",
		OnAttackFailed: "攻击失败",
		OnChannelFinish: "持续施法结束",
		OnChannelInterrupted: "持续施法中断",
		OnChannelSucceeded: "持续施法成功",
		OnEquip: "装备物品",
		OnUnequip: "取下物品",
		OnHealReceived: "受到治疗",
		OnHealthGained: "获得生命值",
		OnHeroKilled: "被英雄杀死",
		OnKill: "杀死单位",
		OnManaGained: "获得魔法值",
		OnOrder: "执行指令",
		OnOwnerDied: "拥有者死亡",
		OnOwnerSpawned: "拥有者出生",
		OnProjectileDodge: "投射物闪避",
		OnProjectileFinish: "投射物结束",
		OnProjectileHitUnit: "投射物命中",
		OnRespawn: "重生",
		OnSpentMana: "消耗魔法",
		OnStateChanged: "状态改变",
		OnTeleported: "传送完成",
		OnTeleporting: "传送中",
		OnToggleOff: "开关：关",
		OnToggleOn: "开关：开",
		OnUnitMoved: "移动",
		OnUpgrade: "技能升级",
		OnCreated: "Modifier创建",
		OnDestroy: "Modifier移除",
		OnIntervalThink: "定时器",
		OnAttackLanded: "攻击命中",
		OnAttackStart: "开始攻击",
		OnDealDamage: "施加伤害",
		OnDeath: "死亡",
		OnOrbFire: "法球被释放",
		OnOrbImpact: "法球命中",
		OnTakeDamage: "受到伤害",
		Orb: "法球",

		// 操作
		ApplyModifier: "添加修饰器",
		RemoveModifier: "移除修饰器",
		AttachEffect: "添加特效",
		FireEffect: "触发特效",
		Damage: "伤害",
		Heal: "治疗",
		FireSound: "触发声音",
		RunScript: "执行脚本",
		Stun: "击晕",
		TrackingProjectile: "跟踪投射物",
		Random: "随机",
		SpawnUnit: "召唤单位",
		ActOnTargets: "让目标行动",
		LevelUpAbility: "技能升级",
		Knockback: "击退",
		AddAbility: "添加技能",
		RemoveAbility: "删除技能",
		Blink: "闪烁",
		DestroyTrees: "摧毁树木",
		DelayedAction: "延迟动作",
		Lifesteal: "生命偷取",
		CleaveAttack: "分裂攻击",
		CreateThinker: "创建计时器",
		LinearProjectile: "线性投射物",
		SpendCharge: "消耗物品",

		// 英雄
		override_hero: "替换英雄",
		AttributePrimary: "主属性",
		AttributeBaseStrength: "基础力量",
		AttributeStrengthGain: "升级力量获得",
		AttributeBaseAgility: "基础敏捷",
		AttributeAgilityGain: "升级敏捷获得",
		AttributeBaseIntelligence: "基础智力",
		AttributeIntelligenceGain: "升级智力获得",

		// 菜单
		EditorAlias: "编辑器别名",
		UsageMarker: "功能标记",
		Dummy: "马甲",
		NoMark: "无标记",
		ColorMarker: "颜色标记",
		Duplicate: "复制",
		Delete: "删除",
		Green: "绿色",
		Blue: "蓝色",
		Red: "红色",
		Yellow: "黄色",
		Black: "黑色",
		None: "无",

		// 帮助
		mainLanguage: "主语言设置会帮助你在编辑界面自动显示主语言对应的名称描述。",
		connectionError: "网络连接错误，请重试",
		streamKeyDesc: "用于访问Stream API获取Dota2数据，未填写只会影响少部分功能。",
		applyStreamKey: "如果您还没有Stream API Key，可以通过该地址申请（中国部分地区需要通过VPN访问）：",
		streamKeyNotSet: "未设置Stream API Key，您可能会遇到数据无法显示。于配置页设置/申请Stream API Key。",
		saveKeepKV: '保存时保持所有的KV。如果不勾选，会忽略未赋值的键。例如"HasInventory" ""，会被忽略。【目前仅应用于单位和英雄存储】',
		illegalCharacter: '输入不合法',
		duplicateDefined: '字段被重复定义',
		emptyList: "列表为空",
		conflictName: "名称冲突",
		noLanguageFile: "没有找到语言文件",
		exitConfirm: "您确认要退出吗？",

	};

	return Locale;
});