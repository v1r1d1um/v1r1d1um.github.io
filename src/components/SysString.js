import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Line = styled.span`
  white-space: nowrap;
`;

const Wrapper = styled.div`
  font-size: 150%;
  margin-left: 18%;
  padding-left: 24px;
  line-height: 36px;
  height: 100vh;
  overflow: hidden;
`;

const Cursor = styled.div`
  position: relative;
  top: -36px;
  left: -24px;
`;

const data = [
  "packages",
  "sys.net",
  "config",
  "sage:",
  "int-scan.exe　[pxt_opts]　run　[run_opts]　[\x3Cscript.fsx>]　[--]　[\x3Cscriptargs>...]",
  "fake.exe　[fixint_opts]　build　[build_opts]　[--]　[\x3Cscriptargs>...]",
  "install.exe　--version",
  "param,.exe　--help　|　-h",
  "(cV_)　Options　[fake_opts]:",
  "-v,　--verbose　[*]　　　　　Verbose　(can　be　used　multiple　times)",
  "　　　　　　　　　　　　　　　　　　　　　　　　Is　ignored　if　-s　is　used.",
  "　　　　　　　　　　　　　　　　　　　　　　　　*　-v:　Log　verbose　but　only　for　FAKE",
  "　　　　　　　　　　　　　　　　　　　　　　　　*　-vv:　Log　verbose　for　Paket　as　wel",
  "struct　group_info　init_groups　=　{　.usage　=　ATOMIC_INIT(2)　};",
  "",
  "struct　group_info　*groups_alloc(int　gidsetsize){",
  "struct　group_info　*group_info;",
  "nt　nblocks;",
  "int　i;",
  "nblocks　=　(gidsetsize　+　NGROUPS_PER_BLOCK　-　1)　/　NGROUPS_PER_BLOCK;",
  "",
  "/*　Make　sure　we　always　allocate　at　least　one　indirect　block　pointer　*/",
  "nblocks　=　nblocks　?　:　1;",
  "group_info　=　kmalloc(sizeof(*group_info)　+　nblocks*sizeof(gid_t　*),　GFP_USER);",
  "",
  "if　(!group_info)",
  "　　　return　NULL;",
  "",
  "group_info->ngroups　=　gidsetsize;",
  "group_info->nblocks　=　nblocks;",
  "atomic_set(&group_info->usage,　1);",
  "",
  "if　(gidsetsize　<=　NGROUPS_SMALL)",
  "　　group_info->blocks[0]　=　group_info->small_block;",
  "else　{",
  "",
  "　　for　(i　=　0;　i　<　nblocks;　i++)　{",
  "　　　　gid_t　*b;",
  "　　　　b　=　(void　*)__get_free_page(GFP_USER);",
  "",
  "　　　　if　(!b)",
  "　　　　　　goto　out_undo_partial_alloc;",
  "　　　　group_info->blocks[i]　=　b;",
  "　　}",
  "}",
  "　　",
  "return　group_info;",
  "out_undo_partial_alloc:",
  "",
  "while　(--i　>=　0)　{",
  "　　free_page((unsigned　long)group_info->blocks[i]);",
  "}",
  "",
  "kfree(group_info);",
  "return　NULL;",
  "}",
  "",
  "EXPORT_SYMBOL(groups_alloc);",
  "void　groups_free(struct　group_info　*group_info)",
  "",
  "{",
  "　　if　(group_info->blocks[0]　!=　group_info->small_block)　{",
  "　　　　int　i;",
  "",
  "　　　　for　(i　=　0;　i　<　group_info->nblocks;　i++)",
  "　　　　　　free_page((unsigned　long)group_info->blocks[i]);",
  "　　}",
  "",
  "　　kfree(group_info);",
  "}",
  "",
  "EXPORT_SYMBOL(groups_free);",
  "",
  "/*　export　the　group_info　to　a　user-space　array　*/",
  "static　int　groups_to_user(gid_t　__user　*grouplist,",
  "　　　const　struct　group_info　*group_info)",
  "",
  "{",
  "　int　i;",
  "　unsigned　int　count　=　group_info->ngroups;",
  "　　",
  "　for　(i　=　0;　i　<　group_info->nblocks;　i++)　{",
  "　　unsigned　int　cp_count　=　min(NGROUPS_PER_BLOCK,　count);",
  "　　unsigned　int　len　=　cp_count　*　sizeof(*grouplist);",
  "　　",
  "　　if　(copy_to_user(grouplist,　group_info->blocks[i],　len))",
  "　　　return　-EFAULT;",
  "　　grouplist　+=　NGROUPS_PER_BLOCK;",
  "　　count　-=　cp_count;",
  "　}",
  "　　",
  "　return　0;",
  "}",
  "　　",
  "/*　fill　a　group_info　from　a　user-space　array　-　it　must　be　allocated　already　*/",
  "static　int　groups_from_user(struct　group_info　*group_info,",
  "　　　　gid_t　__user　*grouplist)",
  "　　",
  "{",
  "　int　i;",
  "　unsigned　int　count　=　group_info->ngroups;",
  "　　",
  "　for　(i　=　0;　i　<　group_info->nblocks;　i++)　{",
  "　　unsigned　int　cp_count　=　min(NGROUPS_PER_BLOCK,　count);",
  "　　unsigned　int　len　=　cp_count　*　sizeof(*grouplist);",
  "　　",
  "　　if　(copy_from_user(group_info->blocks[i],　grouplist,　len))",
  "　　　return　-EFAULT;",
  "　　",
  "　　grouplist　+=　NGROUPS_PER_BLOCK;",
  "　　count　-=　cp_count;",
  "　}",
  "　　",
  "　return　0;",
  "}",
  "　　",
  "/*　a　simple　Shell　sort　*/",
  "static　void　groups_sort(struct　group_info　*group_info)",
  "　　",
  "{",
  "　int　base,　max,　stride;",
  "　int　gidsetsize　=　group_info->ngroups;",
  "　　",
  "　for　(stride　=　1;　stride　<　gidsetsize;　stride　=　3　*　stride　+　1)",
  "　　;　/*　nothing　*/",
  "　stride　/=　3;",
  "　　",
  "　while　(stride)　{",
  "　　max　=　gidsetsize　-　stride;",
  "　　for　(base　=　0;　base　<　max;　base++)　{",
  "　　　　　int　left　=　base;",
  "　　　int　right　=　left　+　stride;",
  "　　　gid_t　tmp　=　GROUP_AT(group_info,　right);",
  "　　",
  "　　　while　(left　>=　0　&&　GROUP_AT(group_info,　left)　>　tmp)　{",
  "　　　　GROUP_AT(group_info,　right)　=",
  "　　　　　　　　GROUP_AT(group_info,　left);",
  "　　　　right　=　left;",
  "　　　　left　-=　stride;",
  "　　　}",
  "　　",
  "　　　GROUP_AT(group_info,　right)　=　tmp;",
  "　　}",
  "　　",
  "　　stride　/=　3;",
  "　}",
  "}",
  "",
  "/* a simple bsearch */",
  "int groups_search(const struct group_info *group_info, gid_t grp)",
  "",
  "{",
  "　unsigned int left, right;",
  "",
  "　if (!group_info)",
  "　　return 0;",
  "",
  "　left = 0;",
  "　right = group_info->ngroups;",
  "",
  "　while (left < right) {",
  "　　unsigned int mid = left + (right - left)/2;",
  "",
  "　　if (grp > GROUP_AT(group_info, mid))",
  "　　　left = mid + 1;",
  "　　else if (grp < GROUP_AT(group_info, mid))",
  "　　　right = mid;",
  "　　else",
  "　　　return 1;",
  "",
  "　}",
  "",
  "　return 0;",
  "}",
  "",
  "/**",
  " * set_groups - Change a group subscription in a set of credentials",
  " * @new: The newly prepared set of credentials to alter",
  " * @group_info: The group list to install",
  " *",
  " * Validate a group subscription and, if valid, insert it into a set",
  " * of credentials.",
  " */",
  "int set_groups(struct cred *new, struct group_info *group_info)",
  "",
  "{",
  "　put_group_info(new->group_info);",
  "　groups_sort(group_info);",
  "　get_group_info(group_info);",
  "　new->group_info = group_info;",
  "　return 0;",
  "}",
  "",
  "EXPORT_SYMBOL(set_groups);",
];

export const SysString = ({ onDone = () => {} }) => {
  const [[lines, startIndex], setLines] = useState([[], 0]);

  useEffect(() => {
    const { innerHeight: vh } = window;
    const range = Math.floor(vh / 36) - 2;
    const endIndex =
      lines.length < range ? lines.length + startIndex + 1 : startIndex + range;

    if (endIndex < data.length) {
      setTimeout(() => {
        setLines([
          data.slice(startIndex, Math.max(endIndex, 6)),
          startIndex + 1,
        ]);
      }, 8);
    } else {
      setTimeout(() => {
        document
          .getElementById("sys-string-wrapper")
          .classList.add("slide-right");
        setTimeout(() => {
          onDone();
        }, 100);
      }, 0);
    }
  }, [lines, startIndex, onDone]);

  return (
    <Wrapper id="sys-string-wrapper">
      {lines.map((line) => (
        <React.Fragment key={uuidv4.v4().replace(/-/g, "")}>
          <Line>$ {line}</Line>
          <br />
        </React.Fragment>
      ))}
      <Cursor>❱</Cursor>
    </Wrapper>
  );
};
