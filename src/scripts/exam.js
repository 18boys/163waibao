var hogan = require('libs/hogan'),
    utils = require('./utils'),
    audio = require('./config/audio'),
    tpl = require('./tpl/exam.string');

var questionArr = [
        {
            'question': 'vulnerable',
            'questionSuffix': 'a.',
            'phonetic': ['vulnerable', '[\'vʌln(ə)rəb(ə)l]'],
            'explain': 'a.脆弱的；易受影响的（to）',
            'answer': [{
                'musix': 'weak',
                'explain': ['A.', 'weak', '脆弱的'],
                'text': 'A weak',
                'flag': true
            }, {
                'musix': 'deprive',
                'explain': ['B.', 'deprive', '使剥夺'],
                'text': 'B deprive',
                'flag': false
            }, {
                'musix': 'interpret',
                'explain': ['C.', 'interpret', '解释'],
                'text': 'C interpret',
                'flag': false
            }, {
                'musix': 'critical',
                'explain': ['D.', 'critical', '批评的'],
                'text': 'D critical',
                'flag': false
            }]
        }, {
            'question': 'be subject to',
            'questionSuffix': '',
            'phonetic': ['be subject to', ''],
            'explain': '受制于....；遭受',
            'answer': [{
                'musix': 'enormous',
                'explain': ['A.', 'enormous', '巨大的'],
                'text': 'A enormous',
                'flag': false
            }, {
                'musix': 'associate',
                'explain': ['B.', 'associate', '使联系'],
                'text': 'B associate',
                'flag': false
            }, {
                'musix': 'incentive',
                'explain': ['C.', 'incentive', '刺激'],
                'text': 'C incentive',
                'flag': false
            }, {
                'musix': 'suffer',
                'explain': ['D.', 'suffer', '遭受'],
                'text': 'D suffer',
                'flag': true
            }]
        }, {
            'question': 'be reluctant to',
            'questionSuffix': '',
            'phonetic': ['be reluctant to', '[rɪ\'lʌkt(ə)nt]'],
            'explain': 'a.不愿意的，不情愿的；（to）',
            'answer': [{
                'musix': 'vary',
                'explain': ['A.', 'vary', '变化、差异'],
                'text': 'A vary',
                'flag': false
            }, {
                'musix': 'unwilling',
                'explain': ['B.', 'unwilling', '不愿意的'],
                'text': 'B unwilling',
                'flag': true
            }, {
                'musix': 'fade',
                'explain': ['C.', 'fade', '褪色'],
                'text': 'C fade',
                'flag': false
            }, {
                'musix': 'specific',
                'explain': ['D.', 'specific', '具体的'],
                'text': 'D specific',
                'flag': false
            }]
        }, {
            'question': 'attach importance to',
            'questionSuffix': '',
            'phonetic': ['attach importance to', ''],
            'explain': '重视',
            'answer': [{
                'musix': 'value',
                'explain': ['A.', 'value', '重视'],
                'text': 'A value',
                'flag': true
            }, {
                'musix': 'object',
                'explain': ['B.', 'object', '反对'],
                'text': 'B object',
                'flag': false
            }, {
                'musix': 'fussy',
                'explain': ['C.', 'fussy', '大惊小怪'],
                'text': 'C fussy',
                'flag': false
            }, {
                'musix': 'panic',
                'explain': ['D.', 'panic', '恐慌的'],
                'text': 'D panic',
                'flag': false
            }]
        }, {
            'question': 'vary',
            'questionSuffix': 'v.',
            'phonetic': ['vary', '[\'veərɪ]'],
            'explain': 'v.不同，差异',
            'answer': [{
                'musix': 'indifference',
                'explain': ['A.', 'indifference', '冷漠'],
                'text': 'A indifference',
                'flag': false
            }, {
                'musix': 'difference',
                'explain': ['B.', 'difference', '不同、差异'],
                'text': 'B difference',
                'flag': true
            }, {
                'musix': 'frame',
                'explain': ['C.', 'frame', '设计'],
                'text': 'C frame',
                'flag': false
            }, {
                'musix': 'address',
                'explain': ['D.', 'address', '解决'],
                'text': 'D address',
                'flag': false
            }]
        }, {
            'question': 'discourage',
            'questionSuffix': 'v.',
            'phonetic': ['discourage', '[dɪs\'kʌrɪdʒ]'],
            'explain': 'v.阻碍…from',
            'answer': [{
                'musix': 'distinguish',
                'explain': ['A.', 'distinguish', '使区分'],
                'text': 'A distinguish',
                'flag': false
            }, {
                'musix': 'lobby',
                'explain': ['B.', 'lobby', '游说'],
                'text': 'B lobby',
                'flag': false
            }, {
                'musix': 'prevent',
                'explain': ['C.', 'prevent', '阻碍'],
                'text': 'C prevent',
                'flag': true
            }, {
                'musix': 'distribute',
                'explain': ['D.', 'distribute', '分发'],
                'text': 'D distribute',
                'flag': false
            }]
        }, {
            'question': 'contribute',
            'questionSuffix': 'v.',
            'phonetic': ['contribute', '[kən\'trɪbjut]'],
            'explain': 'v.有助于；导致(to)',
            'answer': [{
                'musix': 'attribute',
                'explain': ['A.', 'attribute', '归因于'],
                'text': 'A attribute',
                'flag': false
            }, {
                'musix': 'convince',
                'explain': ['B.', 'convince', '使相信'],
                'text': 'B convince',
                'flag': false
            }, {
                'musix': 'help',
                'explain': ['C.', 'help', '有助于'],
                'text': 'C help',
                'flag': true
            }, {
                'musix': 'delight',
                'explain': ['D.', 'delight', '高兴'],
                'text': 'D delight',
                'flag': false
            }]
        }, {
            'question': 'exaggerate',
            'questionSuffix': 'v.',
            'phonetic': ['exaggerate', '[ɪɡ\'zædʒəret]'],
            'explain': 'v.夸张',
            'answer': [{
                'musix': 'magnify',
                'explain': ['A.', 'magnify', '夸大'],
                'text': 'A magnify',
                'flag': true
            }, {
                'musix': 'simplify',
                'explain': ['B.', 'simplify', '简化'],
                'text': 'B simplify',
                'flag': false
            }, {
                'musix': 'specialize',
                'explain': ['C.', 'specialize', '专门从事'],
                'text': 'C specialize',
                'flag': false
            }, {
                'musix': 'expose',
                'explain': ['D.', 'expose', '暴露'],
                'text': 'D expose',
                'flag': false
            }]
        }, {
            'question': 'hinder',
            'questionSuffix': 'v.',
            'phonetic': ['hinder', '[\'hɪndə]'],
            'explain': 'v.阻碍',
            'answer': [{
                'musix': 'promote',
                'explain': ['A.', 'promote', '促进'],
                'text': 'A promote',
                'flag': false
            }, {
                'musix': 'facilitate',
                'explain': ['B.', 'facilitate', '促进'],
                'text': 'B facilitate',
                'flag': false
            }, {
                'musix': 'hamper',
                'explain': ['C.', 'hamper', '阻碍'],
                'text': 'C hamper',
                'flag': true
            }, {
                'musix': 'confirm',
                'explain': ['D.', 'confirm', '确认'],
                'text': 'D confirm',
                'flag': false
            }]
        }, {
            'question': 'ensure',
            'questionSuffix': 'v.',
            'phonetic': ['ensure', '[ɪn\'ʃʊr]'],
            'explain': 'v.确保',
            'answer': [{
                'musix': 'guarantee',
                'explain': ['A.', 'guarantee', '保证'],
                'text': 'A guarantee',
                'flag': true
            }, {
                'musix': 'intense',
                'explain': ['B.', 'intense', '强烈的'],
                'text': 'B intense',
                'flag': false
            }, {
                'musix': 'adapt',
                'explain': ['C.', 'adapt', '适应'],
                'text': 'C adapt',
                'flag': false
            }, {
                'musix': 'adopt',
                'explain': ['D.', 'adopt', '采纳'],
                'text': 'D adopt',
                'flag': false
            }]
        }, {
            'question': 'reflect',
            'questionSuffix': 'v.',
            'phonetic': ['reflect', '[rɪ\'flɛkt]'],
            'explain': 'v.反映',
            'answer': [{
                'musix': 'indicate',
                'explain': ['A.', 'indicate', '表明'],
                'text': 'A indicate',
                'flag': true
            }, {
                'musix': 'remote',
                'explain': ['B.', 'remote', '偏远的'],
                'text': 'B remote',
                'flag': false
            }, {
                'musix': 'recession',
                'explain': ['C.', 'recession', '衰退'],
                'text': 'C recession',
                'flag': false
            }, {
                'musix': 'indispensable',
                'explain': ['D.', 'indispensable', '必不可少的'],
                'text': 'D indispensable',
                'flag': false
            }]
        }, {
            'question': 'assume',
            'questionSuffix': 'v.',
            'phonetic': ['assume', '[ə\'sjuːm]'],
            'explain': 'v.假定；承担（assumption n.）',
            'answer': [{
                'musix': 'consume',
                'explain': ['A.', 'consume', '消费'],
                'text': 'A consume',
                'flag': false
            }, {
                'musix': 'presume',
                'explain': ['B.', 'presume', '假定'],
                'text': 'B presume',
                'flag': true
            }, {
                'musix': 'resume',
                'explain': ['C.', 'resume', '恢复'],
                'text': 'C resume',
                'flag': false
            }, {
                'musix': 'accumulate',
                'explain': ['D.', 'accumulate', '积累'],
                'text': 'D accumulate',
                'flag': false
            }]
        }, {
            'question': 'restrict',
            'questionSuffix': 'v.',
            'phonetic': ['restrict', '[rɪ\'strɪkt]'],
            'explain': 'v.限制',
            'answer': [{
                'musix': 'reserve',
                'explain': ['A.', 'reserve', '保留'],
                'text': 'A reserve',
                'flag': false
            }, {
                'musix': 'reduce',
                'explain': ['B.', 'reduce', '减少'],
                'text': 'B reduce',
                'flag': false
            }, {
                'musix': 'restrain',
                'explain': ['C.', 'restrain', '限制'],
                'text': 'C restrain',
                'flag': true
            }, {
                'musix': 'replace',
                'explain': ['D.', 'replace', '代替'],
                'text': 'D replace',
                'flag': false
            }]
        }, {
            'question': 'embrace',
            'questionSuffix': 'v.',
            'phonetic': ['embrace', '[ɪm\'bres]'],
            'explain': 'v.采纳，接受',
            'answer': [{
                'musix': 'accept',
                'explain': ['A.', 'accept', '接受'],
                'text': 'A accept',
                'flag': true
            }, {
                'musix': 'abstract',
                'explain': ['B.', 'abstract', '抽象的'],
                'text': 'B abstract',
                'flag': false
            }, {
                'musix': 'abnormal',
                'explain': ['C.', 'abnormal', '不正常的'],
                'text': 'C abnormal',
                'flag': false
            }, {
                'musix': 'derive',
                'explain': ['D.', 'derive', '获得、源于'],
                'text': 'D derive',
                'flag': false
            }]
        }, {
            'question': 'promote',
            'questionSuffix': 'v.',
            'phonetic': ['promote', '[prə\'məʊt]'],
            'explain': 'v.促进；促销',
            'answer': [{
                'musix': 'feasible',
                'explain': ['A.', 'feasible', '可行的'],
                'text': 'A feasible',
                'flag': false
            }, {
                'musix': 'inevitable',
                'explain': ['B.', 'inevitable', '不可避免的'],
                'text': 'B inevitable',
                'flag': false
            }, {
                'musix': 'command',
                'explain': ['C.', 'command', '命令'],
                'text': 'C command',
                'flag': false
            }, {
                'musix': 'facilitate',
                'explain': ['D.', 'facilitate', '促进'],
                'text': 'D facilitate',
                'flag': true
            }]
        }, {
            'question': 'incompetent',
            'questionSuffix': 'a.',
            'phonetic': ['incompetent', '[ɪn\'kɒmpɪt(ə)nt]'],
            'explain': 'a.无能力的，不能胜任的',
            'answer': [{
                'musix': 'inadequate',
                'explain': ['A.', 'inadequate', '不足的'],
                'text': 'A inadequate',
                'flag': true
            }, {
                'musix': 'invade',
                'explain': ['B.', 'invade', '侵略'],
                'text': 'B invade',
                'flag': false
            }, {
                'musix': 'investigate',
                'explain': ['C.', 'investigate', '调查'],
                'text': 'C investigate',
                'flag': false
            }, {
                'musix': 'imitate',
                'explain': ['D.', 'imitate', '模仿'],
                'text': 'D imitate',
                'flag': false
            }]
        }, {
            'question': 'indispensable',
            'questionSuffix': 'a.',
            'phonetic': ['indispensable', '[ɪndɪ\'spensəb(ə)l]'],
            'explain': 'a.必不可少的',
            'answer': [{
                'musix': 'essential',
                'explain': ['A.', 'essential', '必需的'],
                'text': 'A essential',
                'flag': true
            }, {
                'musix': 'dispensable',
                'explain': ['B.', 'dispensable', '可有可无的'],
                'text': 'B dispensable',
                'flag': false
            }, {
                'musix': 'aggressive',
                'explain': ['C.', 'aggressive', '挑衅的'],
                'text': 'C aggressive',
                'flag': false
            }, {
                'musix': 'opponent',
                'explain': ['D.', 'opponent', '对手'],
                'text': 'D opponent',
                'flag': false
            }]
        }, {
            'question': 'prejudice',
            'questionSuffix': 'n./v.',
            'phonetic': ['prejudice', '[\'predʒʊdɪs]'],
            'explain': 'n./v.偏见',
            'answer': [{
                'musix': 'fairness',
                'explain': ['A.', 'fairness', '公平'],
                'text': 'A fairness',
                'flag': false
            }, {
                'musix': 'just',
                'explain': ['B.', 'just', '公平的'],
                'text': 'B just',
                'flag': false
            }, {
                'musix': 'bias',
                'explain': ['C.', 'bias', '偏见'],
                'text': 'C bias',
                'flag': true
            }, {
                'musix': 'impartial',
                'explain': ['D.', 'impartial', '公平的'],
                'text': 'D impartial',
                'flag': false
            }]
        }, {
            'question': 'interfere',
            'questionSuffix': 'v.',
            'phonetic': ['interfere', '[ɪntə\'fɪə]'],
            'explain': 'v.干涉 in/with',
            'answer': [{
                'musix': 'interpret',
                'explain': ['A.', 'interpret', '解释'],
                'text': 'A interpret',
                'flag': false
            }, {
                'musix': 'intervene',
                'explain': ['B.', 'intervene', '干涉'],
                'text': 'B intervene',
                'flag': true
            }, {
                'musix': 'interact',
                'explain': ['C.', 'interact', '互动'],
                'text': 'C interact',
                'flag': false
            }, {
                'musix': 'interview',
                'explain': ['D.', 'interview', '采访'],
                'text': 'D interview',
                'flag': false
            }]
        }, {
            'question': 'transform',
            'questionSuffix': 'v.',
            'phonetic': ['transform', '[træns\'fɔrm]'],
            'explain': 'v.改变，转变',
            'answer': [{
                'musix': 'decline',
                'explain': ['A.', 'decline', '下降，减少；谢绝'],
                'text': 'A decline',
                'flag': false
            }, {
                'musix': 'transmit',
                'explain': ['B.', 'transmit', '传送'],
                'text': 'B transmit',
                'flag': false
            }, {
                'musix': 'transplant',
                'explain': ['C.', 'transplant', '移植'],
                'text': 'C transplant',
                'flag': false
            }, {
                'musix': 'change',
                'explain': ['D.', 'change', '改变'],
                'text': 'D change',
                'flag': true
            }]
        }, {
            'question': 'accelerate',
            'questionSuffix': 'v.',
            'phonetic': ['accelerate', '[əkˈsɛləˌret]'],
            'explain': 'v.加速，促进',
            'answer': [{
                'musix': 'promote',
                'explain': ['A.', 'promote', '促进'],
                'text': 'A promote',
                'flag': true
            }, {
                'musix': 'emerge',
                'explain': ['B.', 'emerge', '出现'],
                'text': 'B emerge',
                'flag': false
            }, {
                'musix': 'cater',
                'explain': ['C.', 'cater', '迎合'],
                'text': 'C cater',
                'flag': false
            }, {
                'musix': 'quality',
                'explain': ['D.', 'quality', '品质'],
                'text': 'D quality',
                'flag': false
            }]
        }, {
            'question': 'challenge',
            'questionSuffix': 'v.',
            'phonetic': ['challenge', '[\'tʃælɪn(d)ʒ]'],
            'explain': 'v.质疑；挑战',
            'answer': [{
                'musix': 'launch',
                'explain': ['A.', 'launch', '发现'],
                'text': 'A launch',
                'flag': false
            }, {
                'musix': 'question',
                'explain': ['B.', 'question', '质疑'],
                'text': 'B question',
                'flag': true
            }, {
                'musix': 'evolution',
                'explain': ['C.', 'evolution', '演变'],
                'text': 'C evolution',
                'flag': false
            }, {
                'musix': 'dampen',
                'explain': ['D.', 'dampen', '抑制'],
                'text': 'D dampen',
                'flag': false
            }]
        }, {
            'question': 'critical',
            'questionSuffix': 'a.',
            'phonetic': ['critical', '[\'krɪtɪk(ə)l]'],
            'explain': 'a.批判的，批评的；决定性的',
            'answer': [{
                'musix': 'underline',
                'explain': ['A.', 'underline', '强调'],
                'text': 'A underline',
                'flag': false
            }, {
                'musix': 'submit',
                'explain': ['B.', 'submit', '提交'],
                'text': 'B submit',
                'flag': false
            }, {
                'musix': 'donation',
                'explain': ['C.', 'donation', '捐献'],
                'text': 'C donation',
                'flag': false
            }, {
                'musix': 'blame',
                'explain': ['D.', 'blame', '谴责'],
                'text': 'D blame',
                'flag': true
            }]
        }, {
            'question': 'facilitate',
            'questionSuffix': 'v.',
            'phonetic': ['facilitate', '[fə\'sɪlɪteɪt]'],
            'explain': 'v.促进；使便利',
            'answer': [{
                'musix': 'competent',
                'explain': ['A.', 'competent', '有能力的'],
                'text': 'A competent',
                'flag': false
            }, {
                'musix': 'eliminate',
                'explain': ['B.', 'eliminate', '消除'],
                'text': 'B eliminate',
                'flag': false
            }, {
                'musix': 'boost',
                'explain': ['C.', 'boost', '推进'],
                'text': 'C boost',
                'flag': true
            }, {
                'musix': 'inherit',
                'explain': ['D.', 'inherit', '继承'],
                'text': 'D inherit',
                'flag': false
            }]
        }, {
            'question': 'inadequate',
            'questionSuffix': 'a.',
            'phonetic': ['inadequate', '[ɪn\'ædɪkwət]'],
            'explain': 'a.不足的',
            'answer': [{
                'musix': 'insufficient',
                'explain': ['A.', 'insufficient', '不足的'],
                'text': 'A insufficient',
                'flag': true
            }, {
                'musix': 'monitor',
                'explain': ['B.', 'monitor', '监控'],
                'text': 'B monitor',
                'flag': false
            }, {
                'musix': 'pattern',
                'explain': ['C.', 'pattern', '模式'],
                'text': 'C pattern',
                'flag': false
            }, {
                'musix': 'innovate',
                'explain': ['D.', 'innovate', '革新'],
                'text': 'D innovate',
                'flag': false
            }]
        }, {
            'question': 'curb',
            'questionSuffix': 'v./n.',
            'phonetic': ['curb', '[kɜːb]'],
            'explain': 'v./n.抑制，阻碍',
            'answer': [{
                'musix': 'originate',
                'explain': ['A.', 'originate', '起源'],
                'text': 'A originate',
                'flag': false
            }, {
                'musix': 'vanish',
                'explain': ['B.', 'vanish', '消失'],
                'text': 'B vanish',
                'flag': false
            }, {
                'musix': 'inhibit',
                'explain': ['C.', 'inhibit', '抑制'],
                'text': 'C inhibit',
                'flag': true
            }, {
                'musix': 'gender',
                'explain': ['D.', 'gender', '性别'],
                'text': 'D gender',
                'flag': false
            }]
        }, {
            'question': 'conventional',
            'questionSuffix': 'a.',
            'phonetic': ['conventional', '[kən\'venʃ(ə)n(ə)l]'],
            'explain': 'a.传统的',
            'answer': [{
                'musix': 'violate',
                'explain': ['A.', 'violate', '违反'],
                'text': 'A violate',
                'flag': false
            }, {
                'musix': 'traditional',
                'explain': ['B.', 'traditional', '传统的'],
                'text': 'B traditional',
                'flag': true
            }, {
                'musix': 'vital',
                'explain': ['C.', 'vital', '重要的'],
                'text': 'C vital',
                'flag': false
            }, {
                'musix': 'substantial',
                'explain': ['D.', 'substantial', '相当多的'],
                'text': 'D substantial',
                'flag': false
            }]
        }, {
            'question': 'deteriorate',
            'questionSuffix': 'v.',
            'phonetic': ['deteriorate', '[dɪ\'tɪərɪəreɪt]'],
            'explain': 'v.恶化',
            'answer': [{
                'musix': 'improve',
                'explain': ['A.', 'improve', '改善'],
                'text': 'A improve',
                'flag': false
            }, {
                'musix': 'aggravate',
                'explain': ['B.', 'aggravate', '恶化'],
                'text': 'B aggravate',
                'flag': true
            }, {
                'musix': 'desert',
                'explain': ['C.', 'desert', '放弃'],
                'text': 'C desert',
                'flag': false
            }, {
                'musix': 'dessert',
                'explain': ['D.', 'dessert', '甜点'],
                'text': 'D dessert',
                'flag': false
            }]
        }, {
            'question': 'appeal',
            'questionSuffix': 'v.',
            'phonetic': ['appeal', '[ə\'piːl]'],
            'explain': 'v.吸引；呼吁(~ to sb for sth)',
            'answer': [{
                'musix': 'ascertain',
                'explain': ['A.', 'ascertain', '确定、查明'],
                'text': 'A ascertain',
                'flag': false
            }, {
                'musix': 'attract',
                'explain': ['B.', 'attract', '吸引'],
                'text': 'B attract',
                'flag': true
            }, {
                'musix': 'reveal',
                'explain': ['C.', 'reveal', '揭露'],
                'text': 'C reveal',
                'flag': false
            }, {
                'musix': 'reluctant',
                'explain': ['D.', 'reluctant', '不愿意的'],
                'text': 'D reluctant',
                'flag': false
            }]
        }, {
            'question': 'unbiased',
            'questionSuffix': 'a.',
            'phonetic': ['unbiased', '[ʌn\'baɪəst]'],
            'explain': 'a.公平的',
            'answer': [{
                'musix': 'sustainable',
                'explain': ['A.', 'sustainable', '可持续的'],
                'text': 'A sustainable',
                'flag': false
            }, {
                'musix': 'unfairness',
                'explain': ['B.', 'unfairness', '不公平'],
                'text': 'B unfairness',
                'flag': false
            }, {
                'musix': 'impartial',
                'explain': ['C.', 'impartial', '公平的'],
                'text': 'C impartial',
                'flag': true
            }, {
                'musix': 'military',
                'explain': ['D.', 'military', '军事的'],
                'text': 'D military',
                'flag': false
            }]
        }, {
            'question': 'dramatically',
            'questionSuffix': 'ad.',
            'phonetic': ['dramatically', '[drə\'mætɪkəlɪ]'],
            'explain': 'ad. 引人注目地；大幅度地；',
            'answer': [{
                'musix': 'conspicuously',
                'explain': ['A.', 'conspicuously', '显著地'],
                'text': 'A conspicuously',
                'flag': true
            }, {
                'musix': 'inherently',
                'explain': ['B.', 'inherently', '本质地'],
                'text': 'B inherently',
                'flag': false
            }, {
                'musix': 'intrinsically',
                'explain': ['C.', 'intrinsically', '本质地'],
                'text': 'C intrinsically',
                'flag': false
            }, {
                'musix': 'fairly',
                'explain': ['D.', 'fairly', '公平地'],
                'text': 'D fairly',
                'flag': false
            }]
        }, {
            'question': 'urgent',
            'questionSuffix': 'a.',
            'phonetic': ['urgent', '[ˈɜːdʒənt]'],
            'explain': 'a.紧急的，急迫的',
            'answer': [{
                'musix': 'pressing',
                'explain': ['A.', 'pressing', '急迫地'],
                'text': 'A pressing',
                'flag': true
            }, {
                'musix': 'frown',
                'explain': ['B.', 'frown', '皱眉'],
                'text': 'B frown',
                'flag': false
            }, {
                'musix': 'exaggerate',
                'explain': ['C.', 'exaggerate', '夸张'],
                'text': 'C exaggerate',
                'flag': false
            }, {
                'musix': 'routinely',
                'explain': ['D.', 'routinely', '例行公事地'],
                'text': 'D routinely',
                'flag': false
            }]
        }, {
            'question': 'accurate',
            'questionSuffix': 'a.',
            'phonetic': ['accurate', '[\'ækjʊrət]'],
            'explain': 'a.精确的，精准的',
            'answer': [{
                'musix': 'associate',
                'explain': ['A.', 'associate', '使联系'],
                'text': 'A associate',
                'flag': false
            }, {
                'musix': 'vary',
                'explain': ['B.', 'vary', '不同'],
                'text': 'B vary',
                'flag': false
            }, {
                'musix': 'substitute',
                'explain': ['C.', 'substitute', '代替'],
                'text': 'C substitute',
                'flag': false
            }, {
                'musix': 'precise',
                'explain': ['D.', 'precise', '精确的'],
                'text': 'D precise',
                'flag': true
            }]
        }, {
            'question': 'eliminate',
            'questionSuffix': 'v.',
            'phonetic': ['eliminate', '[ɪ\'lɪmɪneɪt]'],
            'explain': 'v.消除；摆脱',
            'answer': [{
                'musix': 'get rid of',
                'explain': ['A.', 'get rid of', '摆脱'],
                'text': 'A get rid of',
                'flag': true
            }, {
                'musix': 'be bound to',
                'explain': ['B.', 'be bound to', '一定会'],
                'text': 'B be bound to',
                'flag': false
            }, {
                'musix': 'be attached to',
                'explain': ['C.', 'be attached to', '喜爱'],
                'text': 'C be attached to',
                'flag': false
            }, {
                'musix': 'contribute to',
                'explain': ['D.', 'contribute to', '有助于'],
                'text': 'D contribute to',
                'flag': false
            }]
        }, {
            'question': 'qualification',
            'questionSuffix': 'n.',
            'phonetic': ['qualification', '[,kwɒlɪfɪ\'keɪʃ(ə)n]'],
            'explain': 'n.资格',
            'answer': [{
                'musix': 'capability',
                'explain': ['A.', 'capability', '能力'],
                'text': 'A capability',
                'flag': true
            }, {
                'musix': 'quantity',
                'explain': ['B.', 'quantity', '数量'],
                'text': 'B quantity',
                'flag': false
            }, {
                'musix': 'utility',
                'explain': ['C.', 'utility', '实用'],
                'text': 'C utility',
                'flag': false
            }, {
                'musix': 'facility',
                'explain': ['D.', 'facility', '公共设施'],
                'text': 'D facility',
                'flag': false
            }]
        }, {
            'question': 'controversial',
            'questionSuffix': 'a.',
            'phonetic': ['controversial', '[kɒntrə\'vɜːʃ(ə)l]'],
            'explain': 'a.有争议的',
            'answer': [{
                'musix': 'argue',
                'explain': ['A.', 'argue', '争论'],
                'text': 'A argue',
                'flag': true
            }, {
                'musix': 'assume',
                'explain': ['B.', 'assume', '假定'],
                'text': 'B assume',
                'flag': false
            }, {
                'musix': 'productive',
                'explain': ['C.', 'productive', '高效的'],
                'text': 'C productive',
                'flag': false
            }, {
                'musix': 'pose',
                'explain': ['D.', 'pose', '形成'],
                'text': 'D pose',
                'flag': false
            }]
        }, {
            'question': 'obstacle',
            'questionSuffix': 'n.',
            'phonetic': ['obstacle', '[\'ɒbstək(ə)l]'],
            'explain': 'n.障碍，阻碍',
            'answer': [{
                'musix': 'obtain',
                'explain': ['A.', 'obtain', '获得'],
                'text': 'A obtain',
                'flag': false
            }, {
                'musix': 'occupation',
                'explain': ['B.', 'occupation', '职业'],
                'text': 'B occupation',
                'flag': false
            }, {
                'musix': 'operation',
                'explain': ['C.', 'operation', '经营'],
                'text': 'C operation',
                'flag': false
            }, {
                'musix': 'block',
                'explain': ['D.', 'block', '阻碍'],
                'text': 'D block',
                'flag': true
            }]
        }, {
            'question': 'tackle',
            'questionSuffix': 'v.',
            'phonetic': ['tackle', '[\'tæk(ə)l]'],
            'explain': 'v.处理',
            'answer': [{
                'musix': 'handle',
                'explain': ['A.', 'handle', '处理'],
                'text': 'A handle',
                'flag': true
            }, {
                'musix': 'needy',
                'explain': ['B.', 'needy', '贫穷的'],
                'text': 'B needy',
                'flag': false
            }, {
                'musix': 'negotiate',
                'explain': ['C.', 'negotiate', '协商'],
                'text': 'C negotiate',
                'flag': false
            }, {
                'musix': 'overflow',
                'explain': ['D.', 'overflow', '泛滥、溢出'],
                'text': 'D overflow',
                'flag': false
            }]
        }, {
            'question': 'stereotyped',
            'questionSuffix': 'a.',
            'phonetic': ['stereotyped', '[\'sterɪətaɪpt]'],
            'explain': 'a.陈规的，刻板的',
            'answer': [{
                'musix': 'old',
                'explain': ['A.', 'old', '老旧的'],
                'text': 'A old',
                'flag': true
            }, {
                'musix': 'enrollment',
                'explain': ['B.', 'enrollment', '入学人数'],
                'text': 'B enrollment',
                'flag': false
            }, {
                'musix': 'expand',
                'explain': ['C.', 'expand', '扩大'],
                'text': 'C expand',
                'flag': false
            }, {
                'musix': 'odd',
                'explain': ['D.', 'odd', '奇怪的'],
                'text': 'D odd',
                'flag': false
            }]
        }, {
            'question': 'diligent',
            'questionSuffix': 'a.',
            'phonetic': ['diligent', '[\'dɪlɪdʒ(ə)nt]'],
            'explain': 'a.勤勉的，勤奋的',
            'answer': [{
                'musix': 'divorce',
                'explain': ['A.', 'divorce', '离婚'],
                'text': 'A divorce',
                'flag': false
            }, {
                'musix': 'diverse',
                'explain': ['B.', 'diverse', '各种各样'],
                'text': 'B diverse',
                'flag': false
            }, {
                'musix': 'hardworking',
                'explain': ['C.', 'hardworking', '勤奋的'],
                'text': 'C hardworking',
                'flag': true
            }, {
                'musix': 'tackle',
                'explain': ['D.', 'tackle', '处理'],
                'text': 'D tackle',
                'flag': false
            }]
        }, {
            'question': 'consensus',
            'questionSuffix': 'n.',
            'phonetic': ['consensus', '[kənˈsensəs]'],
            'explain': 'n.共识',
            'answer': [{
                'musix': 'censor',
                'explain': ['A.', 'censor', '审查'],
                'text': 'A censor',
                'flag': false
            }, {
                'musix': 'agreement',
                'explain': ['B.', 'agreement', '共识'],
                'text': 'B agreement',
                'flag': true
            }, {
                'musix': 'convert',
                'explain': ['C.', 'convert', '转变'],
                'text': 'C convert',
                'flag': false
            }, {
                'musix': 'slump',
                'explain': ['D.', 'slump', '衰退'],
                'text': 'D slump',
                'flag': false
            }]
        }, {
            'question': 'controversy',
            'questionSuffix': 'n.',
            'phonetic': ['controversy', '[ˈkɒntrəvɜ:si]'],
            'explain': 'n.争议',
            'answer': [{
                'musix': 'dispute',
                'explain': ['A.', 'dispute', '争议'],
                'text': 'A dispute',
                'flag': true
            }, {
                'musix': 'mount',
                'explain': ['B.', 'mount', '增加'],
                'text': 'B mount',
                'flag': false
            }, {
                'musix': 'association',
                'explain': ['C.', 'association', '联系'],
                'text': 'C association',
                'flag': false
            }, {
                'musix': 'rein',
                'explain': ['D.', 'rein', '抑制、驾驭'],
                'text': 'D rein',
                'flag': false
            }]
        }, {
            'question': 'crucial',
            'questionSuffix': 'a.',
            'phonetic': ['crucial', '[ˈkru:ʃl]'],
            'explain': 'adj.关键的',
            'answer': [{
                'musix': 'impassive',
                'explain': ['A.', 'impassive', '冷漠的'],
                'text': 'A impassive',
                'flag': false
            }, {
                'musix': 'important',
                'explain': ['B.', 'important', '重要的'],
                'text': 'B important',
                'flag': true
            }, {
                'musix': 'relative',
                'explain': ['C.', 'relative', '相对的'],
                'text': 'C relative',
                'flag': false
            }, {
                'musix': 'descendant',
                'explain': ['D.', 'descendant', '子孙后代'],
                'text': 'D descendant',
                'flag': false
            }]
        }, {
            'question': 'apathy',
            'questionSuffix': 'n.',
            'phonetic': ['apathy', '[ˈæpəθi]'],
            'explain': 'n.冷漠',
            'answer': [{
                'musix': 'support',
                'explain': ['A.', 'support', '支持'],
                'text': 'A support',
                'flag': false
            }, {
                'musix': 'reserved',
                'explain': ['B.', 'reserved', '矜持的'],
                'text': 'B reserved',
                'flag': false
            }, {
                'musix': 'bias',
                'explain': ['C.', 'bias', '偏见'],
                'text': 'C bias',
                'flag': false
            }, {
                'musix': 'indifference',
                'explain': ['D.', 'indifference', '冷漠'],
                'text': 'D indifference',
                'flag': true
            }]
        }, {
            'question': 'incur',
            'questionSuffix': 'v.',
            'phonetic': ['incur', '[ɪnˈkɜ:(r)]'],
            'explain': 'v.引起',
            'answer': [{
                'musix': 'give rise to',
                'explain': ['A.', 'give rise to', '引起'],
                'text': 'A give rise to',
                'flag': true
            }, {
                'musix': 'at the expense of',
                'explain': ['B.', 'at the expense of', '以...为代价'],
                'text': 'B at the expense of',
                'flag': false
            }, {
                'musix': 'have access to',
                'explain': ['C.', 'have access to', '推进'],
                'text': 'C have access to',
                'flag': false
            }, {
                'musix': 'deprive of',
                'explain': ['D.', 'deprive of', '剥夺'],
                'text': 'D deprive of',
                'flag': false
            }]
        }, {
            'question': 'deter',
            'questionSuffix': 'v.',
            'phonetic': ['deter', '[dɪˈtɜ:(r)]'],
            'explain': 'v.阻碍',
            'answer': [{
                'musix': 'relay',
                'explain': ['A.', 'relay', '转播'],
                'text': 'A relay',
                'flag': false
            }, {
                'musix': 'defer',
                'explain': ['B.', 'defer', '推迟'],
                'text': 'B defer',
                'flag': false
            }, {
                'musix': 'curb',
                'explain': ['C.', 'curb', '抑制'],
                'text': 'C curb',
                'flag': true
            }, {
                'musix': 'blame',
                'explain': ['D.', 'blame', '谴责'],
                'text': 'D blame',
                'flag': false
            }]
        }, {
            'question': 'adverse',
            'questionSuffix': 'a.',
            'phonetic': ['adverse', '[ˈædvɜ:s]'],
            'explain': 'adj.不利的',
            'answer': [{
                'musix': 'unbelievable',
                'explain': ['A.', 'unbelievable', '难以置信的'],
                'text': 'A unbelievable',
                'flag': false
            }, {
                'musix': 'unfavorable',
                'explain': ['B.', 'unfavorable', '不利的'],
                'text': 'B unfavorable',
                'flag': true
            }, {
                'musix': 'undesirable',
                'explain': ['C.', 'undesirable', '不受欢迎的'],
                'text': 'C undesirable',
                'flag': false
            }, {
                'musix': 'undoubtable',
                'explain': ['D.', 'undoubtable', '毫无疑问的'],
                'text': 'D undoubtable',
                'flag': false
            }]
        }, {
            'question': 'complicated',
            'questionSuffix': 'a.',
            'phonetic': ['complicated', '[ˈkɒmplɪkeɪtɪd]'],
            'explain': 'adj.复杂的',
            'answer': [{
                'musix': 'complied',
                'explain': ['A.', 'complied', '顺从的'],
                'text': 'A complied',
                'flag': false
            }, {
                'musix': 'complex',
                'explain': ['B.', 'complex', '复杂的'],
                'text': 'B complex',
                'flag': true
            }, {
                'musix': 'complained',
                'explain': ['C.', 'complained', '抱怨的'],
                'text': 'C complained',
                'flag': false
            }, {
                'musix': 'implied',
                'explain': ['D.', 'implied', '暗示的'],
                'text': 'D implied',
                'flag': false
            }]
        }, {
            'question': 'account for',
            'questionSuffix': 'v.',
            'phonetic': ['account for', ''],
            'explain': 'v.解释、占比例',
            'answer': [{
                'musix': 'explain',
                'explain': ['A.', 'explain', '解释'],
                'text': 'A explain',
                'flag': true
            }, {
                'musix': 'exalt',
                'explain': ['B.', 'exalt', '赞扬'],
                'text': 'B exalt',
                'flag': false
            }, {
                'musix': 'accuse',
                'explain': ['C.', 'accuse', '指责'],
                'text': 'C accuse',
                'flag': false
            }, {
                'musix': 'demand',
                'explain': ['D.', 'demand', '要求'],
                'text': 'D demand',
                'flag': false
            }]
        }, {
            'question': 'surging',
            'questionSuffix': '',
            'phonetic': ['surging', '[\'sɜ:dʒɪŋ]'],
            'explain': '增长、猛增',
            'answer': [{
                'musix': 'diminishing',
                'explain': ['A.', 'diminishing', '减少'],
                'text': 'A diminishing',
                'flag': false
            }, {
                'musix': 'rocketing',
                'explain': ['B.', 'rocketing', '猛增'],
                'text': 'B rocketing',
                'flag': true
            }, {
                'musix': 'contributing',
                'explain': ['C.', 'contributing', '捐献'],
                'text': 'C contributing',
                'flag': false
            }, {
                'musix': 'thriving',
                'explain': ['D.', 'thriving', '繁荣'],
                'text': 'D thriving',
                'flag': false
            }]
        }
    ],
    finalQuestionArr = utils.getRandomList(questionArr, 10);

var voiceSourceList = finalQuestionArr.map(function(item) {
    if(!audio[item.question.replace(/\s/g,'+') + '.mp3']){
        console.log(item);
    }
    return  audio[item.question.replace(/\s/g,'+') + '.mp3'];
});
var path = '..';
var Exam = function(params) {
    this.params = params;

    this.$container = $('.exam');
    // 题目面包dom节点
    this.$board = this.$container.find('.board');
    // 血条dom节点
    this.$middle = this.$container.find('.middle');
    // 数字索引dom节点
    this.$num = this.$container.find('.num');
    // 回答正确人物图片dom节点
    this.$happyPerson = this.$container.find('.happy-person');
    // 回答错误人物图片dom节点
    this.$unhappyPerson = this.$container.find('.unhappy-person');
    // 确定按钮dom节点
    this.$submit = this.$container.find('.btn');
    // 提示容器dom节点
    this.$nextWrapper = this.$container.find('.nextWrapper');
    // 答案解析dom节点
    this.$music = this.$container.find('.music');
    // 查看文字解析dom节点
    this.$explain = this.$container.find('.explain');
    // 文字解析面板容器
    this.$explainLayout = this.$container.find('.explain-layout');
    // 错误的城堡dom节点
    this.$city = this.$container.find('.city');
    // 正确的时候的指示器
    this.$successNumber = this.$container.find('.success-number');
    // 错误的时候的指示器
    this.$failNumber = this.$container.find('.fail-number');

    this.soundVoice = new Audio();
    this.playFlag = false;
    this.questionList = finalQuestionArr;
    this.template = hogan.compile(tpl);
    this.index = 0;
    this.score = 425;
    this.init();
};
Exam.prototype = {
    init: function() {
        this.$container.removeClass('hide');
        this._bindEvent();
        this._renderBlood(425);
        this.render(0);
    },
    render:function(index) {
        var width = 12.5 * (index + 1);

        this.index = index;
        this.$num.html(index + 1 + ' / ' + 10);
        this.$board.html(this.template.render(this.questionList[index]));
    },
    _bindEvent: function() {
        var _this = this,
            index,
            flag;

        // 点击选项
        $(document).on('click', '.exam .answer .item', function(e) {
            // 防止出现下一题的时候又出现确定按钮
            if (_this.$nextWrapper.hasClass('hide')) {
                var $item = $(this);

                index = $item.index();
                $('.exam .item').removeClass('on');
                $item.addClass('on');
                flag = $item.data('flag');
                _this.$submit.removeClass('hide');
            }
        
        // 点击确定
        }).on('click', '.exam .btn', function() {
            _this.$submit.addClass('hide');

            // 回答正确
            if (flag) {
                _this.$happyPerson.removeClass('hide');
                _this._renderBlood(true);
                _this.$successNumber.removeClass('hide');

                setTimeout(nextHandler, 2000);
            } else {
                // 错误的显示灰色，正确的打钩
                $('.exam .item').eq(index).removeClass('on').addClass('fail');
                _this.questionList[_this.index].answer.forEach(function(item, itemIndex) {
                    if (item.flag) {
                        $('.exam .item').eq(itemIndex).addClass('success');
                    }
                });
                _this.$city.removeClass('hide');
                _this.$unhappyPerson.removeClass('hide');
                _this._renderBlood(false);
                _this.$failNumber.removeClass('hide');
                _this.$nextWrapper.removeClass('hide');
            }

        // 点击答案解析
        }).on('click', '.exam .music', function() {
            _this.$music.attr('src', '//shared.ydstatic.com/dict/market/cetResultPredict/imgs/exam-music-on.png');

            // 播放音乐
            _this.soundVoice.src = voiceSourceList[_this.index];
            if(userPlay){
                bgMusic.pause();
            }
            _this.soundVoice.play();
            _this.playFlag = true;

        // 点击文字解析
        }).on('click', '.exam .explain', function() {
            _this.$explainLayout.removeClass('hide');
            _this._renderExplain(_this.questionList[_this.index]);

        // 点击下一题
        }).on('click', '.exam .next', nextHandler)
        // 点击关闭文字解析
        .on('click', '.exam .close', function() {
            _this.$explainLayout.addClass('hide');
        });

        function nextHandler() {
            if(userPlay){
                bgMusic.play();
            }

            // 关掉音乐
            if (_this.playFlag) {
                _this.playFlag = false;
                _this.soundVoice.pause();
            }

            // 全部回答完毕
            if (_this.index + 1 === 10) {
                _this.$container.addClass('hide');
                return _this.params.finishHandler();
            }

            _this._reset();
            _this.render(_this.index + 1);
        }
    },
    _reset: function() {
        this.$happyPerson.addClass('hide');
        this.$unhappyPerson.addClass('hide');
        this.$board.removeClass('on');
        this.$nextWrapper.addClass('hide');
        this.$music.attr('src', '//shared.ydstatic.com/dict/market/cetResultPredict/imgs/exam-music.png');
        this.$explainLayout.addClass('hide');
        this.$city.addClass('hide');
        this.$successNumber.addClass('hide');
        this.$failNumber.addClass('hide');
    },
    _renderExplain:function (data) {
        var htmlStr = '' +
            '<li><span>' + data.phonetic[0] + '</span>&nbsp;&nbsp;&nbsp;&nbsp;' + data.phonetic[1] + '</li>\
            <li>' + data.explain + '</li>\
            <li>' + data.answer[0].explain[0] + ' ' + data.answer[0].explain[1] + ' ' + data.answer[0].explain[2] + '</li>\
            <li>' + data.answer[1].explain[0] + ' ' + data.answer[1].explain[1] + ' ' + data.answer[1].explain[2] + '</li>\
            <li>' + data.answer[2].explain[0] + ' ' + data.answer[2].explain[1] + ' ' + data.answer[2].explain[2] + '</li>\
            <li>' + data.answer[3].explain[0] + ' ' + data.answer[3].explain[1] + ' ' + data.answer[3].explain[2] + '</li>';

        this.$explainLayout.find('ul').html(htmlStr);
    },
    // 血槽
    _renderBlood:function _renderBlood(flag) {
        /**
         * true 表示加血
         * false 表示减血
         * 否则直接修改为所传值
         */
        if (flag === true) {
            this.score += 30;
        } else if (flag === false) {
            this.score += -40;
        } else {
            this.score = flag;
        }

        this.score = Math.min(this.score, 710);
        this.$middle.css('width', this.score / 710 * 124 / 100 + 'rem');
    }
};

module.exports = {
    voiceSourceList: voiceSourceList,
    Exam: Exam
};