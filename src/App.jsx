"use client";
import {
  Select,
  SelectItem,
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  TextInput,
  Title,
  Button,
  Col,
} from "@tremor/react";
import "@covalenthq/goldrush-kit/styles.css";
import { useEffect, useState } from "react";
import { CovalentClient } from "@covalenthq/client-sdk";

export default function App() {
  const [apiKey, setApiKey] = useState("cqt_xxx");
  const [blockchain, setBlockchain] = useState("eth-mainnet");
  const [events, setEvents] = useState("erc20");

  const [min1, setMin1] = useState("$?.00");
  const [min3, setMin3] = useState("$?.00");
  const [min5, setMin5] = useState("$?.00");

  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function buttonPressed() {
    setIsLoading(true);
    setToggle(!toggle);
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      var client = new CovalentClient(apiKey);
      const resp = await client.BaseService.getGasPrices(
        blockchain,
        events,
        "USD"
      );
      if (!resp.error) {
        // console.log("min1: %s", resp.data.items[0].pretty_total_gas_quote);
        // console.log("min3: %s", resp.data.items[1].pretty_total_gas_quote);
        // console.log("min5: %s", resp.data.items[2].pretty_total_gas_quote);
        if (!resp.data.items[0].pretty_total_gas_quote) {
          setMin1("Not Supported...");
          setMin3("Not Supported...");
          setMin5("Not Supported...");
        } else {
          setMin1(resp.data.items[0].pretty_total_gas_quote);
          setMin3(resp.data.items[1].pretty_total_gas_quote);
          setMin5(resp.data.items[2].pretty_total_gas_quote);
        }
      } else {
        setMin1("Error...");
        setMin3("Error...");
        setMin5("Error...");
        console.log(resp.error_message)
      }
      setIsLoading(false);
    };

    getData();
  }, [toggle, blockchain, events]);

  return (
    <Card className="m-6">
      <Title>Covalent Gas Dashboard</Title>
      <Card>
        <Grid numItemsSm={3}>
          <Col className="p-2">
            <Text>COVALENT_APIKEY</Text>
            <TextInput value={apiKey} onValueChange={setApiKey}></TextInput>
          </Col>
          <Col className="p-2">
            <Text>BLOCKCHAIN</Text>
            <Select onValueChange={setBlockchain} defaultValue={blockchain}>
              <SelectItem value="arbitrum-goerli">arbitrum-goerli</SelectItem>
              <SelectItem value="arbitrum-mainnet">arbitrum-mainnet</SelectItem>
              <SelectItem value="arbitrum-nova-mainnet">
                arbitrum-nova-mainnet
              </SelectItem>
              <SelectItem value="arbitrum-sepolia">arbitrum-sepolia</SelectItem>
              <SelectItem value="aurora-mainnet">aurora-mainnet</SelectItem>
              <SelectItem value="avalanche-beam-mainnet">
                avalanche-beam-mainnet
              </SelectItem>
              <SelectItem value="avalanche-dexalot-mainnet">
                avalanche-dexalot-mainnet
              </SelectItem>
              <SelectItem value="avalanche-dos">avalanche-dos</SelectItem>
              <SelectItem value="avalanche-loco-legends-mainnet">
                avalanche-loco-legends-mainnet
              </SelectItem>
              <SelectItem value="avalanche-mainnet">
                avalanche-mainnet
              </SelectItem>
              <SelectItem value="avalanche-mainnet">
                avalanche-mainnet
              </SelectItem>
              <SelectItem value="avalanche-mainnet">
                avalanche-mainnet
              </SelectItem>
              <SelectItem value="avalanche-meld-mainnet">
                avalanche-meld-mainnet
              </SelectItem>
              <SelectItem value="avalanche-numbers">
                avalanche-numbers
              </SelectItem>
              <SelectItem value="avalanche-shrapnel-mainnet">
                avalanche-shrapnel-mainnet
              </SelectItem>
              <SelectItem value="avalanche-step-network">
                avalanche-step-network
              </SelectItem>
              <SelectItem value="avalanche-uptn">avalanche-uptn</SelectItem>
              <SelectItem value="avalanche-xanachain">
                avalanche-xanachain
              </SelectItem>
              <SelectItem value="avalanche-xplus">avalanche-xplus</SelectItem>
              <SelectItem value="axie-mainnet">axie-mainnet</SelectItem>
              <SelectItem value="base-mainnet">base-mainnet</SelectItem>
              <SelectItem value="bnb-antimatter-mainnet">
                bnb-antimatter-mainnet
              </SelectItem>
              <SelectItem value="bnb-fncy-mainnet">bnb-fncy-mainnet</SelectItem>
              <SelectItem value="bnb-meta-apes-mainnet">
                bnb-meta-apes-mainnet
              </SelectItem>
              <SelectItem value="bnb-opbnb-mainnet">
                bnb-opbnb-mainnet
              </SelectItem>
              <SelectItem value="boba-bnb-mainnet">boba-bnb-mainnet</SelectItem>
              <SelectItem value="boba-goerli">boba-goerli</SelectItem>
              <SelectItem value="boba-mainnet">boba-mainnet</SelectItem>
              <SelectItem value="bsc-mainnet">bsc-mainnet</SelectItem>
              <SelectItem value="btc-mainnet">btc-mainnet</SelectItem>
              <SelectItem value="canto-mainnet">canto-mainnet</SelectItem>
              <SelectItem value="covalent-internal-network-v1">
                covalent-internal-network-v1
              </SelectItem>
              <SelectItem value="cronos-mainnet">cronos-mainnet</SelectItem>
              <SelectItem value="defi-kingdoms-mainnet">
                defi-kingdoms-mainnet
              </SelectItem>
              <SelectItem value="emerald-paratime-mainnet">
                emerald-paratime-mainnet
              </SelectItem>
              <SelectItem value="eth-goerli">eth-goerli</SelectItem>
              <SelectItem value="eth-holesky">eth-holesky</SelectItem>
              <SelectItem value="eth-mainnet">eth-mainnet</SelectItem>
              <SelectItem value="eth-sepolia">eth-sepolia</SelectItem>
              <SelectItem value="evmos-mainnet">evmos-mainnet</SelectItem>
              <SelectItem value="fantom-mainnet">fantom-mainnet</SelectItem>
              <SelectItem value="flarenetworks-canary-mainnet">
                flarenetworks-canary-mainnet
              </SelectItem>
              <SelectItem value="flarenetworks-flare-mainnet">
                flarenetworks-flare-mainnet
              </SelectItem>
              <SelectItem value="gather-mainnet">gather-mainnet</SelectItem>
              <SelectItem value="gnosis-mainnet">gnosis-mainnet</SelectItem>
              <SelectItem value="harmony-mainnet">harmony-mainnet</SelectItem>
              <SelectItem value="horizen-eon-mainnet">
                horizen-eon-mainnet
              </SelectItem>
              <SelectItem value="kcc-mainnet">kcc-mainnet</SelectItem>
              <SelectItem value="linea-mainnet">linea-mainnet</SelectItem>
              <SelectItem value="loot-mainnet">loot-mainnet</SelectItem>
              <SelectItem value="lumoz-decibling">lumoz-decibling</SelectItem>
              <SelectItem value="lumoz-public-zksync-v2">
                lumoz-public-zksync-v2
              </SelectItem>
              <SelectItem value="lumoz-stark-sport">
                lumoz-stark-sport
              </SelectItem>
              <SelectItem value="mantle-mainnet">mantle-mainnet</SelectItem>
              <SelectItem value="matic-mainnet">matic-mainnet</SelectItem>
              <SelectItem value="matic-mumbai">matic-mumbai</SelectItem>
              <SelectItem value="meter-mainnet">meter-mainnet</SelectItem>
              <SelectItem value="metis-mainnet">metis-mainnet</SelectItem>
              <SelectItem value="metis-stardust">metis-stardust</SelectItem>
              <SelectItem value="milkomeda-a1-mainnet">
                milkomeda-a1-mainnet
              </SelectItem>
              <SelectItem value="milkomeda-c1-devnet">
                milkomeda-c1-devnet
              </SelectItem>
              <SelectItem value="milkomeda-c1-mainnet">
                milkomeda-c1-mainnet
              </SelectItem>
              <SelectItem value="moonbeam-mainnet">moonbeam-mainnet</SelectItem>
              <SelectItem value="moonbeam-moonbase-alpha">
                moonbeam-moonbase-alpha
              </SelectItem>
              <SelectItem value="moonbeam-moonriver">
                moonbeam-moonriver
              </SelectItem>
              <SelectItem value="oasis-sapphire-mainnet">
                oasis-sapphire-mainnet
              </SelectItem>
              <SelectItem value="oasys-mainnet">oasys-mainnet</SelectItem>
              <SelectItem value="opside-cb-zkevm">opside-cb-zkevm</SelectItem>
              <SelectItem value="opside-debox">opside-debox</SelectItem>
              <SelectItem value="opside-era7">opside-era7</SelectItem>
              <SelectItem value="opside-jackbot">opside-jackbot</SelectItem>
              <SelectItem value="opside-law-chain">opside-law-chain</SelectItem>
              <SelectItem value="opside-public-zkevm">
                opside-public-zkevm
              </SelectItem>
              <SelectItem value="opside-relation">opside-relation</SelectItem>
              <SelectItem value="opside-soquest-zkevm">
                opside-soquest-zkevm
              </SelectItem>
              <SelectItem value="opside-vip3">opside-vip3</SelectItem>
              <SelectItem value="opside-xthrill">opside-xthrill</SelectItem>
              <SelectItem value="opside-zkmeta">opside-zkmeta</SelectItem>
              <SelectItem value="optimism-goerli">optimism-goerli</SelectItem>
              <SelectItem value="optimism-mainnet">optimism-mainnet</SelectItem>
              <SelectItem value="optimism-sepolia">optimism-sepolia</SelectItem>
              <SelectItem value="palm-mainnet">palm-mainnet</SelectItem>
              <SelectItem value="pgn-mainnet">pgn-mainnet</SelectItem>
              <SelectItem value="polygon-zkevm-mainnet">
                polygon-zkevm-mainnet
              </SelectItem>
              <SelectItem value="rollux-mainnet">rollux-mainnet</SelectItem>
              <SelectItem value="rsk-mainnet">rsk-mainnet</SelectItem>
              <SelectItem value="scroll-mainnet">scroll-mainnet</SelectItem>
              <SelectItem value="solana-mainnet">solana-mainnet</SelectItem>
              <SelectItem value="sx-mainnet">sx-mainnet</SelectItem>
              <SelectItem value="telos-mainnet">telos-mainnet</SelectItem>
              <SelectItem value="tomochain-mainnet">
                tomochain-mainnet
              </SelectItem>
              <SelectItem value="ultron-mainnet">ultron-mainnet</SelectItem>
              <SelectItem value="zksync-mainnet">zksync-mainnet</SelectItem>
              <SelectItem value="zora-mainnet">zora-mainnet</SelectItem>
            </Select>
          </Col>
          <Col className="p-2">
            <Text>EVENTS</Text>
            <Select onValueChange={setEvents} defaultValue={events}>
              <SelectItem value="erc20">ERC20 token transfers</SelectItem>
              <SelectItem value="nativetokens">
                Native token transfers
              </SelectItem>
              <SelectItem value="uniswapv3">Uniswap V3 swap events</SelectItem>
            </Select>
          </Col>
        </Grid>
        <Col className="m-6">
          <Button onClick={buttonPressed}>Update APIKEY!</Button>
        </Col>
      </Card>
      <br />
      <TabGroup className="m-6">
        <TabList className="m-6 p-6">
          <Tab>Current Gas Fees</Tab>
          <Tab>About this Page</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="m-6">
            <Grid numItemsMd={3} className="m-6">
              <Card>
                <Title>
                  Gas Price on {blockchain} - {events} (1min)
                </Title>
                {isLoading ? <Text>Loading...</Text> : <h1>{min1}</h1>}
              </Card>
              <Card>
                <Title className="h-28">
                  Gas Price on {blockchain} - {events} (3min)
                </Title>
                {isLoading ? <Text>Loading...</Text> : <h1>{min3}</h1>}
              </Card>
              <Card>
                <Title className="h-28">
                  Gas Price on {blockchain} - {events} (5min)
                </Title>
                {isLoading ? <Text>Loading...</Text> : <h1>{min5}</h1>}
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel className="m-6">
            <Grid numItemsMd={1}>
              <Card>
                <Text>
                  This page was made for the Covalent bounty - Build and Deploy
                  a Chain-specific Gas Price Dashboard Using GoldRush Kit
                </Text>
                <br />
                <Text>
                  Protection of User API Keys We are committed to safeguarding
                  the security and confidentiality of API keys entrusted to us
                  by our users. We adhere to strict best practices to ensure
                  that API keys are used securely and not retained
                  unnecessarily. If you need to get API Key, please visit{" "}
                  <a href="https://www.covalenthq.com/platform/">
                    https://www.covalenthq.com/platform/
                  </a>{" "}
                  and sign up for an API Key.
                </Text>
              </Card>
            </Grid>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
}
